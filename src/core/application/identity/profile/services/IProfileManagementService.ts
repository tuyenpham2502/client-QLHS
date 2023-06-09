import { CancelToken } from "axios";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import { RequestDocument, Variables } from "graphql-request";
import Cookie from "src/core/application/common/models/Cookies";
import { UpdateMyProfileRequest } from "@/core/application/dto/profile/request/UpdateMyProfileRequest";

export interface IProfileManagementService {

    /**
      *
      * @param query
     * @param cookie
     * @param variables
      */
    getMyProfileAccountAsync(query: RequestDocument, cookie: Cookie, variables: Variables): Promise<RequestResponse>

  /**
    *
    * @param query
   * @param cookie
   * @param variables
    */
    updateMyProfileAccountAsync(query: RequestDocument, cookie: Cookie, variables: UpdateMyProfileRequest): Promise<RequestResponse>


}
