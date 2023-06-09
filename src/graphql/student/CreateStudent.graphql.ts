import { gql } from "graphql-request";

export const CreateStudentMutation = gql`

mutation CreateStudent(
    $studentId: String!
    $name: String!
    $gender: String!
    $className: String!
    $birthDate: DateTime!
    $bloodGroup: String!
    $religion: String!
    $fatherName: String!
    $motherName: String!
    $email: String!
    $phoneNumber: String!
    $occupation: String
    $address: String!
    $description: String

) { 
    createStudent(input: {
        studentId: $studentId
        name: $name
        gender: $gender
        className: $className
        birthDate: $birthDate
        bloodGroup: $bloodGroup
        religion: $religion
        fatherName: $fatherName
        motherName: $motherName
        email: $email
        phoneNumber: $phoneNumber
        occupation: $occupation
        address: $address
        description: $description
    }
    ) {
        status
    }
}
`;