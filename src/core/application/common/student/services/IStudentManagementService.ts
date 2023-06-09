import { CancelToken } from "axios";
import { RequestResponse } from "src/core/application/dto/common/responses/RequestResponse";
import { RequestDocument, Variables } from "graphql-request";
import Cookie from "src/core/application/common/models/Cookies";
import { UpdateMyProfileRequest } from "@/core/application/dto/profile/request/UpdateMyProfileRequest";
import { CreateStudentRequest } from "@/core/application/dto/student/request/CreateStudentRequest";
import { GetStudentRequest } from "@/core/application/dto/student/request/GetStudentRequest";

export interface IStudentManagementService {

    /**
      *
      * @param query
     * @param cookie
     * @param variables
      */
    createStudentAsync(query: RequestDocument, cookie: Cookie, variables: CreateStudentRequest): Promise<RequestResponse>

    /**
      *
      * @param query
     * @param cookie
     * @param variables
      */
    getStudentAsync(query: RequestDocument, cookie: Cookie, variables: GetStudentRequest): Promise<RequestResponse>


}
