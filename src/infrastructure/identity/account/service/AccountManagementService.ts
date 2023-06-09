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
import { UpdateMyProfileRequest, UpdateMyProfileVer2Request } from "@/core/application/dto/profile/request/UpdateMyProfileRequest";
import LocalStorageService from "src/infrastructure/services/LocalStorageService";
import { SignUpPasswordReQuest } from "@/core/application/dto/account/requests/SignUpWithPassword";

export class AccountManagementService implements IAccountManagementService {

    private readonly loggerService = new LoggerService();
    private readonly cookieService = new CookieService();
    private readonly localStorageService = new LocalStorageService();

    async signInWithOAuthAsync(query: RequestDocument, cookie: Cookie, variables: SignInWithOAuthRequest|any): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
            if (result.status == 200) {
                this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(true, (result as SuccessResponse).data.signInWithOAuth?.access_token, (result as SuccessResponse).data.signInWithOAuth?.refresh_token));
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

    public async signInWithEmailAsync(query: RequestDocument, cookie: Cookie, variables?: SignInWithPasswordRequest|any): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
            if (result.status == 200) {
                this.localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(true, (result as SuccessResponse).data?.loginUser?.access_token, (result as SuccessResponse).data?.loginUser?.refresh_token));
                // this.cookieService.setCookie(document, new Cookie(true, (result as SuccessResponse).data?.loginUser?.access_token, (result as SuccessResponse).data?.loginUser?.refresh_token));
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

    public async signUpWithEmailAsync(query: RequestDocument, cookie: Cookie, variables?: SignUpPasswordReQuest|any): Promise<RequestResponse> {
        try {
            let result = await new RequestGraphQLService().makePostRequestAsync(query, cookie, variables);
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

    public async logoutAsync(query: RequestDocument, cookie: Cookie, variables?: LogoutAccountRequest|any): Promise<RequestResponse> {
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

    public async forgotPasswordAsync(query: RequestDocument, cookie: Cookie, variable?: ForgotPasswordRequest|any): Promise<RequestResponse> {
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

    public async changePasswordForForgot(query: RequestDocument, cookie: Cookie, variable?: ChangePasswordForForgotRequest |any): Promise<RequestResponse> {
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


    public async changePasswordAsync(query: RequestDocument, cookie: Cookie, variable?: Variables|any): Promise<RequestResponse> {

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
