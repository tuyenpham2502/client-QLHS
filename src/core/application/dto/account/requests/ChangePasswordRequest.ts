export class ChangePasswordRequest{
    confirmPassword:string="";
    currentPassword:string="";
    forceEndOtherSessions: boolean = false;
    newPassword:string="";
    constructor(confirmPassword:string, currentPassword:string,forceEndOtherSessions: boolean ,newPassword:string) {
        this.confirmPassword=confirmPassword;
        this.currentPassword=currentPassword;
        this.forceEndOtherSessions=forceEndOtherSessions;
        this.newPassword=newPassword;
    }
}