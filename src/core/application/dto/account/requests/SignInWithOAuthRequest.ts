export class SignInWithOAuthRequest{
    token:string="";
    oAuthProvider:string="";
    captchaToken:string="";
    constructor(token:string, oAuthProvider:string, captchaToken:string) {
        this.token=token;
        this.oAuthProvider=oAuthProvider;
        this.captchaToken=captchaToken;
    }
}
