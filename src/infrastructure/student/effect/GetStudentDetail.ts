import Constants from '@/core/application/common/Constants';
import Cookie from "@/core/application/common/models/Cookies";
import FailureResponse from "@/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "@/core/application/dto/common/responses/InvalidModelStateResponse";
import { UpdateMyProfileRequest } from "@/core/application/dto/profile/request/UpdateMyProfileRequest";
import { UpdateMyProfileMutation } from "@/graphql/my-profile/UpdateMyProfile.graphql";
import { notifySuccess, notifyError } from "@/infrastructure/common/components/controls/toast/toast-message";
import { filterError } from "@/infrastructure/helpers";
import LoggerService from "src/infrastructure/services/LoggerService";
import { NextRouter } from "next/router";
import { setRecoilStateAsync } from "@/infrastructure/common/libs/recoil-outside/Service";
import { ProfileState } from "@/core/application/common/atoms/Identity/Profile/ProfileState";
import LocalStorageService from "@/infrastructure/services/LocalStorageService";
import { CreateStudentRequest } from '@/core/application/dto/student/request/CreateStudentRequest';
import { StudentManagementService } from '../service/StudentManagementService';
import { GetStudentQuery } from '@/graphql/student/GetStudent.graphql';
import SuccessResponse from '@/core/application/dto/common/responses/SuccessResponse';
import { GetStudentDetailRequest } from '@/core/application/dto/student/request/GetStudentDetail';
import { GetStudentDetailMutation } from '@/graphql/student/GetStudentDetail.graphql';

export const getStudentDetail = async (
    translator: any,
    cookies: Cookie,
    LoggerService: LoggerService,
    setData: Function,
    variables: GetStudentDetailRequest,
    setLoading: Function
) => {
    if(variables != null) {
        const localStorage = new LocalStorageService();
        setLoading(true);
        let response = await new StudentManagementService().getStudentAsync(
            GetStudentDetailMutation,
            cookies,
            variables
        );
        if(response.status == 200) {
            setLoading(false);
            setData((response as SuccessResponse)?.data?.getStudentDetail?.student);
        }
        if(response.status == 202) {
            let errors = (response as FailureResponse).errors;
            if(errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        setLoading(false);
        if(response.constructor.name == InvalidModelStateResponse.name) {
            LoggerService.info((response as InvalidModelStateResponse).errors);
        }
        return response;

    }

}
