import { gql } from "graphql-request";

export const UpdateMyProfileMutation = gql`
mutation UpdateUser($name:String!, $email:String! , $birthDate: DateTime, $address: String!, $phoneNumber: String!, $photo: String!) {
    updateUser(input: {name:$name, email:$email, birthDate: $birthDate, address: $address, phoneNumber: $phoneNumber, photo: $photo}) {
        status
        user {
        id
        name
        birthDate
        address
        photo
        phoneNumber
        role
        }
    }
}
`;