export class GetStudentRequest {
    studentId: string |any;
    name: string |any;
    className: string|any
    constructor(
        studentId: string |any,
        name: string |any,
        className: string |any,
    ) {
        this.studentId = studentId;
        this.name = name;
        this.className = className;
    }
}