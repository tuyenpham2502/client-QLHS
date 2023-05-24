import {gql} from "graphql-request";

export const SignUpMutation = gql`
mutation SignUpUser($input: SignUpInput!) {
  signupUser(input: $input) {
    status
    user {
      name
      email
      photo
      role
    }
  }
}
`;