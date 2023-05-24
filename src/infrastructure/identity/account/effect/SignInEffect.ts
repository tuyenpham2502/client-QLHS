import { NextRouter } from "next/router";
import { ProfileState, RoleNameLoginState, TenantIdState, UserLoginIdState } from "src/core/application/common/atoms/Identity/Profile/ProfileState";
import Constants from "@/core/application/common/Constants";
import Cookie from "src/core/application/common/models/Cookies";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "src/core/application/dto/common/responses/InvalidModelStateResponse";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import { SignInWithPasswordRequest } from "src/core/application/dto/account/requests/SignInWithPasswordRequest";
import { RoleName } from "src/core/domain/enums/Roles";
import { LoginMutation } from "src/graphql/account/LoginMutation.graphql";
import { GetMeQuery } from "src/graphql/account/GetMeQuery.graphql";
import { notifyError } from "src/infrastructure/common/components/controls/toast/toast-message";
import { setRecoilStateAsync } from "src/infrastructure/common/libs/recoil-outside/Service";
import { filterError } from "src/infrastructure/helpers";
import CookieService from "src/infrastructure/services/CookieService";
import LocalStorageService from "src/infrastructure/services/LocalStorageService";
import LoggerService from "src/infrastructure/services/LoggerService";
import { AccountManagementService } from "./service/AccountManagementService";

export const loginWithEmailAsync = async (
    translator: any,
    email: string,
    password: string,
    captchaToken: string,
    router: NextRouter,
    loggerService: LoggerService,
    cookie: Cookie,
    setLoading: Function
) => {
    if (
        email &&
        password &&
        email.length > 0 &&
        password.length > 0
    ) {
        setLoading(true);
        let response =
            await new AccountManagementService().signInWithEmailAsync(
                LoginMutation,
                cookie,
                new SignInWithPasswordRequest(email, password, captchaToken),
            );
        // Logged in ok, redirect to the home page
        if (response.status == 200) {
            // router.push("/");
            return response
        }
        if (response.status == 202) {
            setLoading(false);
            let errors = (response as FailureResponse).errors;
            if (errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        if (response.constructor.name == InvalidModelStateResponse.name) {
            setLoading(false);
            loggerService.info((response as InvalidModelStateResponse).errors);
        }
        return response;
    }
};

export const getMyProfileAsync = async (
    translator: any,
    router: NextRouter,
    cookie: Cookie,
    loggerService: LoggerService,
    setUserRole: Function,
    setLoading: Function,
) => {
    const localStorageService = new LocalStorageService();
    let response = await new AccountManagementService().getMyProfileAccountAsync(
        GetMeQuery,
        cookie,
    );
    if (response.status == 200) {
        let arrRoles = (response as SuccessResponse).data?.getMyProfile?.profiles[0]?.roles || []
        if (arrRoles[0]?.name.toUpperCase() == RoleName.User) {
            notifyError(translator, translator("Bạn không có quyền truy cập."));
            await setRecoilStateAsync(ProfileState, {
                data: {},
            });
            localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(false, '', ''));
            router.push("/account/sign-in.html");
        } else {
            let arr: any[] = [];
            if (arrRoles && arrRoles.length) {
                arrRoles.forEach((element: { name: any; }):any => {
                    arr.push(element.name)
                });
            }
            setUserRole(arr);
            setRecoilStateAsync(RoleNameLoginState, {
                data: arr
            })
            setRecoilStateAsync(ProfileState, {
                data: (response as SuccessResponse).data.getMyProfile.profiles
            })
            setRecoilStateAsync(UserLoginIdState, {
                data: (response as SuccessResponse).data.getMyProfile.id
            })
            setRecoilStateAsync(TenantIdState, {
                data: (response as SuccessResponse).data.getMyProfile.tenantId
            })
            router.push('/');
        }
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }
    if (response.status == 202) {
        let errors = (response as FailureResponse).errors;
        if (errors != null && errors.length > 0) {
            notifyError(translator, filterError(errors));
            setLoading(false);
        }
    }
    if (response.constructor.name == InvalidModelStateResponse.name) {
        setLoading(false);

        loggerService.info((response as InvalidModelStateResponse).errors);
    }
    return response;
};
