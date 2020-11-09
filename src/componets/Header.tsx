import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/Auth/auth.actions';

import { defaultState } from '../types/default-state';

import HeaderStyles from '../styles/Header.module.css';
import Button from '../styles/Button.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state: defaultState) => state.auth.user?.email);

  const onLogoutClick = () => {
    history.push('/');
    dispatch(logout());
  };

  return (
    <header className={HeaderStyles.container}>
      <div className={HeaderStyles.header}>
        <h1 className={HeaderStyles.title}>Note App</h1>
        <div className={HeaderStyles.info}>
          <p>{email && email}</p>
          <div className={HeaderStyles.buttons_container}>
            <NavLink
              to={'/dashboard'}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                color: '#21a6ff',
              }}
            >
              To Home Page
            </NavLink>
            <button className={Button.logout_btn} onClick={onLogoutClick}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// @ts-ignore
export default Header;
// @ts-ignore
