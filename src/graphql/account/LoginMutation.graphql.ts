import { gql } from "graphql-request";

export const LoginMutation = gql`
mutation($email: String!, $password: String!) {
  loginUser(input:{email: $email, password: $password}) {
    status
    access_token 
  }
}
`;