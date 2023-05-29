export class ForgotPasswordRequest{
    email:string="";
    captchaToken:string="";

    constructor(email:string, captchaToken:string) {
        this.email=email;
        this.captchaToken=captchaToken;
    }
}
