import { gql } from 'apollo-boost';
import {GET_LOGGED_IN_USER} from "../queries/personnel";

export const LOGIN = gql`
  mutation($input: InputLogin!) {
    login(input: $input) {
      personnel {
        id,
        serial,
        name,
        lastname,
        email,
        role
      },
      jwt
    }
  }
`;

export const LOGIN_UPDATE = (cache: any, { data: { login } }: any) => {
  localStorage.setItem('token', login.jwt);
  cache.writeQuery({
    query: GET_LOGGED_IN_USER,
    data: { user: login.personnel },
  });
};

export const SIGN_UP = gql`
  mutation($input: InputSignUp!) {
    signUp(input: $input) {
      personnel {
        id,
        serial,
        name,
        lastname,
        email,
        role
      },
      jwt
    }
  }
`;

export const SIGN_UP_UPDATE = (cache: any, { data: { signUp } }: any) => {
  localStorage.setItem('token', signUp.jwt);
  cache.writeQuery({
    query: GET_LOGGED_IN_USER,
    data: { user: signUp.personnel },
  });
};
