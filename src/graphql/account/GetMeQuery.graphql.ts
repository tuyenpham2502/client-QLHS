import { gql } from "graphql-request";

export const GetMeQuery = gql`
getMe {
    status
    user {
      _id
      id
      email
      name
      role
      photo
      updatedAt
      createdAt
    }
  }
`;
