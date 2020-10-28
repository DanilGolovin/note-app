import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={HeaderStyles.container}>
      <div className={HeaderStyles.header}>
        <h1>Note App</h1>
        <NavLink
          to={'/'}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            color: '#21a6ff',
          }}
        >
          To Home Page
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
