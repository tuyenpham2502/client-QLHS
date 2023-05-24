import { gql } from "graphql-request";

export const LoginMutation = gql`
mutation LoginUser(email: String!, password: String!) {
  loginUser(input:{email: $email, password: $password}) {
    status
    accessToken 
  }
}
`;