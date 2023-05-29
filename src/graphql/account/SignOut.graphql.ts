import {gql} from "graphql-request";

export const LogOutMutation = gql`
query LogoutUser {
  logoutUser
}
`;