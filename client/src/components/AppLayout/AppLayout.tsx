import React, { FC } from 'react';
import Header from '../Header/Header';

// @ts-ignore
const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
