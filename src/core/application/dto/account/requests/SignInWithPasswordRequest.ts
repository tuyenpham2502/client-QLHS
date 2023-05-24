export class SignInWithPasswordRequest {
    email: string = "";
    password: string = "";
    captchaToken:string="";
    constructor(
        email: string,
        password: string,
        captchaToken:string
    ) {
        this.email = email;
        this.password = password;
        this.captchaToken=captchaToken;
    }
}
