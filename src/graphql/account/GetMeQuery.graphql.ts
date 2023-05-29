import { gql } from "graphql-request";

export const GetMeQuery = gql`
query {
  getMe {
    status
    user {
      id
      email
      name
      birthDate
      address
      phoneNumber
      photo
      role
      updatedAt
      createdAt
    }
  }
}
`;
