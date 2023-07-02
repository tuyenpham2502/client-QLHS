import Cookie from "@/core/application/common/models/Cookies";
import FailureResponse from "@/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "@/core/application/dto/common/responses/InvalidModelStateResponse";
import { notifySuccess, notifyError } from "@/infrastructure/common/components/controls/toast/toast-message";
import { filterError } from "@/infrastructure/helpers";
import LoggerService from "src/infrastructure/services/LoggerService";
import { NextRouter } from "next/router";
import LocalStorageService from "@/infrastructure/services/LocalStorageService";
import { StudentManagementService } from '../service/StudentManagementService';
import { UpdateStudentRequest } from 'src/core/application/dto/student/request/UpdateStudent';
import { UpdateStudentMutation } from '@/graphql/student/UpdateStudent.graphql';
export const UpdateStudent = async (
    translator: any,
    router: NextRouter,
    variables: UpdateStudentRequest,
    LoggerService: LoggerService,
    cookies: Cookie,
    setLoading: Function
) => {
    if (variables != null) {
        const localStorage = new LocalStorageService();
        setLoading(true);
        let response = await new StudentManagementService().UpdateStudentAsync(
            UpdateStudentMutation,
            cookies,
            variables
        );
        if (response.status == 200) {
            notifySuccess(translator, "Update profile successfully");
            setLoading(false);
            router.push("/students/all-students/list");
        }
        if (response.status == 202) {
            let errors = (response as FailureResponse).errors;
            if (errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        setLoading(false);
        if (response.constructor.name == InvalidModelStateResponse.name) {
            LoggerService.info((response as InvalidModelStateResponse).errors);
        }
        return response;

    }

}
