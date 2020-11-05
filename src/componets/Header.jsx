import React, { useMemo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { logout } from '../redux/Auth/auth.actions';

import HeaderStyles from '../styles/Header.module.css';
import Button from '../styles/Button.module.css';

const Header = () => {
  const email = useMemo(() => localStorage.getItem('email'), []);

  const dispatch = useDispatch();
  const history = useHistory();

  const onLogoutClick = () => {
    console.log('logout');
    history.push('/');
    dispatch(logout());
  };

  return (
    <header className={HeaderStyles.container}>
      <div className={HeaderStyles.header}>
        <h1 className={HeaderStyles.title}>Note App</h1>
        <div className={HeaderStyles.info}>
          {email}
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
