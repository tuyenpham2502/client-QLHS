import { LoadingState } from 'src/core/application/common/atoms/global/LoadingState';
import { IRequestGraphQLService } from "src/core/application/services/IRequestGraphQLService";
import LoggerService from "./LoggerService";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import NetworkException from "src/core/application/common/exceptions/NetworkException";
import { setRecoilStateAsync, getRecoilStateAsync } from "src/infrastructure/common/libs/recoil-outside/Service";
import { GraphQLClient, Variables } from 'graphql-request';
import Cookie from 'src/core/application/common/models/Cookies';
import CookieService from './CookieService';
import jwtDecode, { JwtPayload } from "jwt-decode";
import LocalStorageService from './LocalStorageService';
import Constants from '@/core/application/common/Constants';

export default class RequestGraphQLService implements IRequestGraphQLService {
    private readonly loggerService = new LoggerService();
    private readonly baseURL = "http://localhost:8000/graphql";
    private readonly cookieService = new CookieService();
    private readonly localStorageService = new LocalStorageService();

    private getOptions(context: Cookie) {
        let storage = this.localStorageService.readStorage(Constants.API_TOKEN_STORAGE);
        let token = storage?.access_token || "";
        const opts = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        };
        return opts;
    };

    /**
     * @param response
     */
    private processRequest(response: any): RequestResponse {
        try {
            if (response.status == 200) {
                if (response.errors && response.errors.length) {
                    return new FailureResponse(response.errors);
                }
                return new SuccessResponse(response.message, response.data);
            }
            if (response.status == 202) {
                return new FailureResponse(response.errors);

            }
            if (response.status == 400) {
                return new InvalidModelStateResponse(response.errors);
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            new LoggerService().error(e);
            throw e;
        }
    }

    async makePostRequestAsync(query: any, context: Cookie, variables: Variables, isSetRecoil: boolean = true): Promise<RequestResponse> {
        //const setIsLoading = useSetRecoilState(LoadingState);
        try {
            const _url = `${this.baseURL}`;
            if (isSetRecoil) {
                await setRecoilStateAsync(LoadingState, { isLoading: true, uri: _url });
            }

            return this.processRequest(await new GraphQLClient(this.baseURL, this.getOptions(context)).rawRequest(query, variables));
        } catch (e:any) {

            let expried = context?.access_token ? jwtDecode<JwtPayload>(context.access_token).exp : null;
            if (e.response?.Status == 500 && (e.response?.Payload?.Key == "ValidateJwtAsync" || e.response?.Payload?.Key == "InvokeAsync")) {
                this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(false, '', ''));
            }

            if (e.response?.Status === 500 || e.response?.Status === 401 || e.response?.Status == 403) {
                if (expried && expried <= Date.parse(new Date().toUTCString()) / 1000) {
                    this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(false, '', ''));
                    setTimeout(() => {
                        window.location.href = window.location.origin;
                    }, 333);
                }
            }

            return new FailureResponse(e.response?.errors || e.errors);

            // this.loggerService.error(e);
            // throw e;
        }
        finally {
            if (isSetRecoil) {
                await setRecoilStateAsync(LoadingState, { isLoading: false, uri: '' });
            }
        }
    }
}