import Constants from '@/core/application/common/Constants';
import Cookie from "@/core/application/common/models/Cookies";
import FailureResponse from "@/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "@/core/application/dto/common/responses/InvalidModelStateResponse";
import { UpdateMyProfileRequest } from "@/core/application/dto/profile/UpdateMyProfileRequest";
import { UpdateMyProfileMutation } from "@/graphql/my-profile/UpdateMyProfile.graphql";
import { notifySuccess, notifyError } from "@/infrastructure/common/components/controls/toast/toast-message";
import { filterError } from "@/infrastructure/helpers";
import LoggerService from "src/infrastructure/services/LoggerService";
import { ProfileManagementService } from "../service/ProfileManagementService";
import { NextRouter } from "next/router";
import { setRecoilStateAsync } from "@/infrastructure/common/libs/recoil-outside/Service";
import { ProfileState } from "@/core/application/common/atoms/Identity/Profile/ProfileState";
import LocalStorageService from "@/infrastructure/services/LocalStorageService";


export const updateMyProfile = async (
    translator: any,
    router: NextRouter,
    variables : UpdateMyProfileRequest,
    LoggerService: LoggerService,
    cookies: Cookie,
    setLoading: Function
) => {
    if(variables != null) {
        const localStorage = new LocalStorageService();
        setLoading(true);
        let response = await new ProfileManagementService().updateMyProfileAccountAsync(
            UpdateMyProfileMutation,
            cookies,
            variables
        );
        if(response.status == 200) {
            notifySuccess(translator, "Update profile successfully");
            await setRecoilStateAsync(ProfileState, {
                data: {},
            });
            localStorage.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(false,'',''));
            router.push("/account/sign-in.html");
        }
        if(response.status == 202) {
            setLoading(false);
            let errors = (response as FailureResponse).errors;
            if(errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        if(response.constructor.name == InvalidModelStateResponse.name) {
            setLoading(false);
            LoggerService.info((response as InvalidModelStateResponse).errors);
        }
        return response;
    }
}
