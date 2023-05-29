interface ErrorElement {
    name: string,
    code: string,
    message: string,
}
export default class MessageErrors {
    static Data: Array<ErrorElement> = [
        {
            name:"EmailAlreadyExistsError",
            code:"FORBIDDEN",
            message:"Email is already exists"
        },
        {
            name:"EmailOrPasswordIsIncorrectError",
            code:"UNAUTHENTICATED",
            message:"Email or password is incorrect"
        },
    ]

}