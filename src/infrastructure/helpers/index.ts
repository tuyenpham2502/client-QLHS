import Constant from "@/core/application/common/Constants"
import MessageErrors from "@/core/application/common/MessageError"
export const validateFields = ({isImplicitChange = false, key, isCheck, setError, error, message}:any) => {
    if (isImplicitChange) {
        error[key] = {
            isError: isCheck,
            message: message,
        };
    } else {
        setError({
            ...error,
            [key]: {
                isError: isCheck,
                message: message,
            }
        });
    }

};

export const filterError = (errors: any) => {
    if (errors && errors.length) {
        const messageError = MessageErrors.Data.filter(it => it.code == errors[0]?.extensions?.code)
        return messageError[0]?.message || "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!";
    }
    return "Đã có lỗi xảy ra. Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết!";
}





