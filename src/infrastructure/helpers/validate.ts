export function validateEmail(email: string) {
    let reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    // return url != null && reg.test(url);
    return email && reg.test(email);
}

export function validateInputPassword(val: string, oldVal = "") {
    if (oldVal && val == oldVal) {
        return false
    }
    // let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W_]).{8,}$/
    // let reg =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return val && reg.test(val);
}

export function validatePhoneNumber(val: string) {
    let reg = /^(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return val && reg.test(val);
}

export function validateName(val: string) {
    let reg = /[^0-9]{3,}$/;
    return val && reg.test(val);
}

export function validateOTP(val: string) {
    let reg = /[0-9]{6,}$/;
    return val && reg.test(val);
}

export function validateFormProduct(val: string) {
    let reg = /[a-zA-Z0-9]/;
    return val && reg.test(val);
}

export function validateImg(img: string) {
    let reg = /\/(jpe?g|png)$/i;
    // return url != null && reg.test(url);
    return img && reg.test(img);
}

export function validateVideo(video: string) {
    let reg = /\/(mpe?g|mp4)$/i;
    // return url != null && reg.test(url);
    return video && reg.test(video);
}

export function validateCsv(file: string) {
    let reg = /\/(csv)$/i;
    // return url != null && reg.test(url);
    return file && reg.test(file);
}

export function validateForm(val: string) {
    let reg = /[a-zA-Z0-9]/;
    return val && reg.test(val);
}

export function validateNumber(e: string) {
    const pattern = /^\d+$/;
    return pattern.test(e);
}

export function validateCMND(val: string) {
    const pattern = /^[0-9]{12}$/;
    return val && pattern.test(val);
}

export function validateTax(val: string) {
    let reg = /^([0-9-]{10,13})$/;
    return val && reg.test(val)
}

export function validateFileExcel(file: string) {
    const reg = /.*\.(xlsx|xls)/g;
    // return url != null && reg.test(url);
    return file && reg.test(file);
}

export function validateDate(val: string) {
    const reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return val && reg.test(val);
}

export function validateSpace(val: string) {
    let reg = /\s/;
    return val && reg.test(val);
}