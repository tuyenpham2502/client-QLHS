import { SignInWithPasswordRequest } from "src/core/application/dto/account/requests/SignInWithPasswordRequest";
import { CancelToken } from "axios";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import { SignInWithOAuthRequest } from "src/core/application/dto/account/requests/SignInWithOAuthRequest";
import { OAuthProviders } from "src/core/domain/enums/OAuthProviders";
import { RequestDocument, Variables } from "graphql-request";
import { LogoutAccountRequest } from "src/core/application/dto/account/requests/LogoutAccountRequest";
import { ForgotPasswordRequest } from "src/core/application/dto/account/requests/ForgotPasswordRequest";
import { ChangePasswordForForgotRequest } from "src/core/application/dto/account/requests/ChangePasswordForForgotRequest";
import Cookie from "src/core/application/common/models/Cookies";
import { UpdateMyProfileRequest } from "src/core/application/dto/profile/UpdateMyProfileRequest";

export interface IAccountManagementService {
  /**
   * Sign with OAuth
   * @param query
   * @param cookie
   * @param variables
   */
  signInWithOAuthAsync(query: RequestDocument, cookie: Cookie, variables:  SignInWithOAuthRequest): Promise<RequestResponse>
  
  /**
   * Sign in with phone number
   * @param query
   * @param cookie
   * @param variables
   */
  signInWithEmailAsync(query: RequestDocument, cookie: Cookie, variables: SignInWithPasswordRequest): Promise<RequestResponse>

  /**
 * @param query
  * @param cookie
  * @param variables
  */
  logoutAsync(query: RequestDocument, cookie: Cookie, variables: LogoutAccountRequest): Promise<RequestResponse>


  /**
 *
 * @param query
 * @param cookie
 * @param variables
 */
  forgotPasswordAsync(query: RequestDocument, cookie: Cookie, variables: ForgotPasswordRequest): Promise<RequestResponse>


  /**
    *
    * @param query
   * @param cookie
   * @param variables
    */
  changePasswordForForgot(query: RequestDocument, cookie: Cookie, variables: ChangePasswordForForgotRequest): Promise<RequestResponse>

  changePasswordAsync(query: RequestDocument, cookie: Cookie, variables: Variables): Promise<RequestResponse>

}
