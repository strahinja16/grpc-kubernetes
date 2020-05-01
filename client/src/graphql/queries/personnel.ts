import {gql} from "apollo-boost";

export const GET_LOGGED_IN_USER = gql`
  {
    user @client {
      id,
      serial,
      name,
      lastname,
      email,
      role
    }
  }
`;
