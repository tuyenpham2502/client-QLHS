import Constant from "@/core/application/common/constants"

export const AuthErrors = (error: string) => {
    switch (error) {
        case Constant.AuthErrorCodes.UserNotFound.code:
            return Constant.AuthErrorCodes.UserNotFound.message;
    }

}
