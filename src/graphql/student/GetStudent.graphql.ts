import { gql } from "graphql-request";

export const GetStudentQuery = gql`
query GetStudents($studentId:String, $name: String, $className: String) {
    getStudents(studentId:$studentId, name: $name, className: $className) {
        status
        students {
            _id
            studentId
            name
            gender
            className
            birthDate
            fatherName   
            email
            phoneNumber
            address
          }
    }
}
`;
