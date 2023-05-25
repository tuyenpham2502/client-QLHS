import {gql} from "graphql-request";

export const SignUpMutation = gql`
mutation SignUpUser($name: String!, $email: String!, $password: String!, $passwordConfirm: String!, $role: String!) {
  signupUser(input: {name: $name, email: $email, password: $password, passwordConfirm: $passwordConfirm, role: $role}) {
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