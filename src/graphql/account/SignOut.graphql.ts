import {gql} from "graphql-request";

export const SignOutMutation = gql`
query LogoutUser {
  logoutUser
}
`;