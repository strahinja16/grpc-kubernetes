import React, { FC, useState } from "react";
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import {GET_LOGGED_IN_USER} from "../../graphql/queries/personnel";
import {useQuery} from "@apollo/react-hooks";
import './Header.scss';

const Header: FC = () => {
  const { data } = useQuery(GET_LOGGED_IN_USER);
  const history = useHistory();
  const [activeItem, setActiveItem ] = useState('login');

  const handleItemClick = (e: any, { name }: any) => {
    setActiveItem(name);
    history.push(`/${name}`);
  };

  if (data && data.user) {
    return (
      <Menu pointing secondary>
        <Menu.Menu position='right'>
          <Menu.Item
            name='warehouses'
            active={activeItem === 'warehouses'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='execution'
            active={activeItem === 'execution'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }

  return (
    <Menu pointing secondary>
      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='sign-up'
          active={activeItem === 'sign-up'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
