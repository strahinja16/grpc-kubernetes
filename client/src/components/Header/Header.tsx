import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import {GET_LOGGED_IN_USER} from "../../graphql/queries/personnel";
import {useQuery} from "@apollo/react-hooks";

const Header: FC = () => {
  const { data } = useQuery(GET_LOGGED_IN_USER);

  if (data && data.user) {
    return (
      <nav className="nav">
        <NavLink className="nav__link" to="/logout">
          Logout
        </NavLink>
        <NavLink className="nav__link" to="/execution">
          Execution
        </NavLink>
        <NavLink className="nav__link" to="/materials">
          Materials
        </NavLink>
      </nav>
    );
  }

  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/sign-up">
        Sign up
      </NavLink>
      <NavLink className="nav__link" to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
