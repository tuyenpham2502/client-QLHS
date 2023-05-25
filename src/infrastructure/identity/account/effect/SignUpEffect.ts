import Cookie from "src/core/application/common/models/Cookies";
import { NextRouter } from "next/router";
import { AccountManagementService } from "../service/AccountManagementService";
import { SignUpMutation } from "@/graphql/account/SignUpMutation.graphql";
import { SignUpPasswordReQuest } from "@/core/application/dto/account/requests/SignUpWithPassword";
import FailureResponse from "@/core/application/dto/common/responses/FailureResponse";
import { notifyError } from "@/infrastructure/common/components/controls/toast/toast-message";
import LoggerService from "src/infrastructure/services/LoggerService";
import InvalidModelStateResponse from "@/core/application/dto/common/responses/InvalidModelStateResponse";
import { filterError } from "@/infrastructure/helpers";

export const signUpWithEmailAsync = async (
    translator: any,
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
    router: NextRouter,
    loggerService: LoggerService,
    cookies: Cookie,
    setLoading: Function
) => {
    if(name && password && email && name.length > 0 && password.length > 0 && email.length > 0) {
        setLoading(true);
        let response = await new AccountManagementService().signUpWithEmailAsync(
            SignUpMutation,
            cookies,
            new SignUpPasswordReQuest(name, email, password, passwordConfirm)
        );
        if(response.status == 200) {
            // router.push("/");
            return response;
        }
        if(response.status == 202) {
            setLoading(false);
            let errors = (response as FailureResponse).errors;
            if(errors != null && errors.length > 0)
                notifyError(translator, filterError(errors));
        }
        if(response.constructor.name == InvalidModelStateResponse.name) {
            setLoading(false);
            loggerService.info((response as InvalidModelStateResponse).errors);
        }
        return response;
    }
}
    