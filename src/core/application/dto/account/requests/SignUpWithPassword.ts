export class SignUpPasswordReQuest {
    name: string = "";
    email: string = "";
    password: string = "";
    passwordConfirm = "";
    role = "";
    constructor(
        name: string,
        email: string,
        password: string,
        passwordConfirm: string,
        role = "user"
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.role = role;
    }
}