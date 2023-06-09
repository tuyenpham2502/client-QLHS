export class CreateStudentRequest {
    studentId: string;
    name: string;
    gender: string;
    className: string;
    birthDate: Date;
    bloodGroup: string;
    religion: string;
    fatherName: string;
    motherName: string;
    email: string;
    address : string;
    phoneNumber: string;
    occupation: string;
    description: string;
    constructor(
        studentId: string,
        name: string,   
        gender: string,
        className: string,
        birthDate: Date,
        bloodGroup: string,
        religion: string,
        fatherName: string,
        motherName: string,
        email: string,
        address : string,
        phoneNumber: string,
        occupation: string,
        description: string
        
    ) {
        this.studentId = studentId;
        this.name = name;
        this.gender=gender;
        this.className = className;
        this.birthDate = birthDate;
        this.bloodGroup = bloodGroup;
        this.religion = religion;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.occupation = occupation;
        this.description = description;
}
}