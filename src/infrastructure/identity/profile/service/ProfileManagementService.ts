import { IProfileManagementService } from "src/core/application/identity/profile/services/IProfileManagementService";
import axios, { CancelToken } from "axios";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import NetworkException from "src/core/application/common/exceptions/NetworkException";
import Constants from "@/core/application/common/Constants";
import LoggerService from "src/infrastructure/services/LoggerService";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import CookieService from "src/infrastructure/services/CookieService";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import Cookie from "src/core/application/common/models/Cookies";
import RequestGraphQLService from "src/infrastructure/services/RequestGraphQLService";
import { RequestDocument, Variables } from "graphql-request";
import { UpdateMyProfileRequest, UpdateMyProfileVer2Request } from "src/core/application/dto/profile/UpdateMyProfileRequest";
import LocalStorageService from "src/infrastructure/services/LocalStorageService";

export class ProfileManagementService implements IProfileManagementService {

    private readonly loggerService = new LoggerService();
    private readonly cookieService = new CookieService();
    private readonly localStorageService = new LocalStorageService();

    public async getMyProfileAccountAsync(query: RequestDocument, cookie: Cookie, variable?: Variables): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;
            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }
    }

    public async updateMyProfileAccountAsync(query: RequestDocument, cookie: Cookie, variable?: UpdateMyProfileRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variable);
            if (result.status == 200) {
                return result as SuccessResponse;
            }
            if (result.status == 202) {
                return result as FailureResponse;
            }
            if (result.status == 400) {
                return result as InvalidModelStateResponse
            }
            throw new NetworkException('No http status code handler');
        } catch (e) {
            this.loggerService.error(e);
            throw e;
        }
    }
}