import { GetStudentDetail } from './../../../graphql/student/GetStudentDetail.graphql';
import { IStudentManagementService } from "@/core/application/common/student/services/IStudentManagementService";
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
import { UpdateMyProfileRequest, UpdateMyProfileVer2Request } from "@/core/application/dto/profile/request/UpdateMyProfileRequest";
import LocalStorageService from "src/infrastructure/services/LocalStorageService";
import { CreateStudentRequest } from "@/core/application/dto/student/request/CreateStudentRequest";
import { GetStudentRequest } from "@/core/application/dto/student/request/GetStudentRequest";
import { GetStudentDetailRequest } from '@/core/application/dto/student/request/GetStudentDetail';

export class StudentManagementService implements IStudentManagementService {

    private readonly loggerService = new LoggerService();
    private readonly cookieService = new CookieService();
    private readonly localStorageService = new LocalStorageService();

    public async createStudentAsync(query: RequestDocument, cookie: Cookie, variable?: CreateStudentRequest|any): Promise<RequestResponse> {
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

    public async getStudentAsync(query: RequestDocument, cookie: Cookie, variable?: GetStudentRequest|any): Promise<RequestResponse> {
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

    public async GetStudentDetailAsync(query: RequestDocument, cookie: Cookie, variable?: GetStudentDetailRequest|any): Promise<RequestResponse> {
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
        }
        catch (e) {
            this.loggerService.error(e);
            throw e;
        }

    }

}
