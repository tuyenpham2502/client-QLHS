export class ChangePasswordForForgotRequest{
    resetToken:string="";
    newPassword:string="";
    confirmNewPassword:string="";
    captchaToken:string="";
    tanantId:string="";

    constructor(resetToken:string, newPassword:string, confirmNewPassword:string, captchaToken:string, tanantId:string) {
        this.resetToken=resetToken;
        this.newPassword=newPassword;
        this.confirmNewPassword=confirmNewPassword;
        this.captchaToken=captchaToken;
        this.tanantId=tanantId;
    }
}
