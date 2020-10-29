import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../redux/Auth/auth.actions';

import HeaderStyles from '../styles/Header.module.css';
import Button from '../styles/Button.module.css';

const HeaderProps = {
  dispatch: PropTypes.func,
};

const Header = ({ dispatch }) => {
  const email = useMemo(() => localStorage.getItem('email'), []);

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
            <button className={Button.logout_btn} onClick={() => dispatch(logout())}>
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

Header.propTypes = HeaderProps;

export default connect(mapStateToProps)(Header);
