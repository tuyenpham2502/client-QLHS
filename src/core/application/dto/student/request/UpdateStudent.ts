export class UpdateStudentRequest {
    id: string;
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
        id: string,
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
    )
    {
        this.id = id;
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