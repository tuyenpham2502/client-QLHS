import { IAccountManagementService } from "src/core/application/identity/account/services/IAccountManagementService";
import { SignInWithPasswordRequest } from "src/core/application/dto/account/requests/SignInWithPasswordRequest";
import { SignInWithPasswordResponse } from "@/core/application/dto/account/responses/SignInWithPasswordResponse";
import axios, { CancelToken } from "axios";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import NetworkException from "src/core/application/common/exceptions/NetworkException";
import Constants from "@/core/application/common/Constants";
import RequestService from "src/infrastructure/services/RequestService";
import LoggerService from "src/infrastructure/services/LoggerService";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import CookieService from "src/infrastructure/services/CookieService";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import Cookie from "src/core/application/common/models/Cookies";
import { SignInWithOAuthRequest } from "src/core/application/dto/account/requests/SignInWithOAuthRequest";
import { OAuthProviders } from "src/core/domain/enums/OAuthProviders";
import RequestGraphQLService from "src/infrastructure/services/RequestGraphQLService";
import { RequestDocument, Variables } from "graphql-request";
import { LogoutAccountRequest } from "src/core/application/dto/account/requests/LogoutAccountRequest";
import { ForgotPasswordRequest } from "src/core/application/dto/account/requests/ForgotPasswordRequest";
import { ChangePasswordForForgotRequest } from "src/core/application/dto/account/requests/ChangePasswordForForgotRequest";
import { UpdateMyProfileRequest, UpdateMyProfileVer2Request } from "src/core/application/dto/profile/UpdateMyProfileRequest";
import LocalStorageService from "src/infrastructure/services/LocalStorageService";

export class AccountManagementService implements IAccountManagementService {

    private readonly loggerService = new LoggerService();
    private readonly cookieService = new CookieService();
    private readonly localStorageService = new LocalStorageService();

    async signInWithOAuthAsync(query: RequestDocument, cookie: Cookie, variables:  SignInWithOAuthRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
            if (result.status == 200) {
                this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(true, (result as SuccessResponse).data.signInWithOAuth?.token, (result as SuccessResponse).data.signInWithOAuth?.refreshToken));
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

    public async signInWithEmailAsync(query: RequestDocument, cookie: Cookie, variables?: SignInWithPasswordRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
            if (result.status == 200) {
                this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(true, (result as SuccessResponse).data?.signinWithPassword?.token, (result as SuccessResponse).data?.signinWithPassword?.refreshToken));
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

    public async logoutAsync(query: RequestDocument, cookie: Cookie, variables?: LogoutAccountRequest): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
            if (result.status == 200) {
                this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(false, '', ''));
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

    public async forgotPasswordAsync(query: RequestDocument, cookie: Cookie, variable?: ForgotPasswordRequest): Promise<RequestResponse> {
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

    public async changePasswordForForgot(query: RequestDocument, cookie: Cookie, variable?: ChangePasswordForForgotRequest): Promise<RequestResponse> {
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

    public async getMyProfileAccountAsync(query: RequestDocument, cookie: Cookie, variable?: Variables): Promise<RequestResponse>{
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

    public async updateMyProfileAccountAsync(query: RequestDocument, cookie: Cookie, variable?: UpdateMyProfileRequest): Promise<RequestResponse>{
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

    public async updateMyProfileVer2AccountAsync(query: RequestDocument, cookie: Cookie, variable?: UpdateMyProfileVer2Request): Promise<RequestResponse>{
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

    public async changePasswordAsync(query: RequestDocument,cookie: Cookie, variable?: Variables): Promise<RequestResponse> {
       
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
