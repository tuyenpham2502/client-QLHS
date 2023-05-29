import Cookie from "@/core/application/common/models/Cookies";
import { LogoutAccountRequest } from "@/core/application/dto/account/requests/LogoutAccountRequest";
import FailureResponse from "@/core/application/dto/common/responses/FailureResponse";
import InvalidModelStateResponse from "@/core/application/dto/common/responses/InvalidModelStateResponse";
import { notifyError } from "@/infrastructure/common/components/controls/toast/toast-message";
import { filterError } from "@/infrastructure/helpers";
import LoggerService from "@/infrastructure/services/LoggerService";
import { NextRouter } from "next/router";
import { AccountManagementService } from "../service/AccountManagementService";
import { LogOutMutation } from "@/graphql/account/SignOut.graphql";




export const logOutAsync = async (
        translator: any,
        isLogoutAllDevice: Boolean,
        router: NextRouter,
        loggerService: LoggerService,
        cookie: Cookie,
    ) => {
        let response =
            await new AccountManagementService().logoutAsync(
                LogOutMutation,
                cookie,
                new LogoutAccountRequest(isLogoutAllDevice),
            );
        // Logged in ok, redirect to the home page
        if (response.status == 200) {
            router.push("/account/sign-in.html");
        }
        if (response.status == 202) {
            let errors = (response as FailureResponse).errors;
            if (errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        if (response.constructor.name == InvalidModelStateResponse.name) {
            loggerService.info((response as InvalidModelStateResponse).errors);
        }
    };
    