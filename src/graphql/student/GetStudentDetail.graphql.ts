import { gql } from "graphql-request";

export const GetStudentDetailMutation = gql`
    query GetStudentDetail($id: ID!) {
        getStudentDetail(id: $id) {
            status
            student{
                studentId
                className
                name
                gender
                fatherName
                motherName
                birthDate
                religion
                occupation
                email
                description
            }
        }
    }
`;