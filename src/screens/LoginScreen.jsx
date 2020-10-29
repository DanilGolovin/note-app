import React, { useState } from 'react';
import { connect } from 'react-redux';

import Form from '../styles/Form.module.css';
import Input from '../styles/Input.module.css';
import Button from '../styles/Button.module.css';

import Container from '../styles/Container.module.css';
import Text from '../styles/Text.module.css';

import PropTypes from 'prop-types';

import { login } from '../redux/Auth/auth.actions';

const LoginPageProps = {
  dispatch: PropTypes.func,
};

const LoginScreen = ({ dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(email.toLowerCase());
  };

  const validatePassword = () => {
    const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return rePassword.test(password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputError('');
    if (!validateEmail()) {
      setInputError('Invalid email!');
    } else if (!validatePassword()) {
      setInputError(
        'Password must contain minimum six characters, at least one letter and one number!',
      );
    } else {
      setInputError('');
      dispatch(login(email));
    }
  };

  return (
    <div className={Container.center + ' ' + Container.login_wrapper}>
      <h1>Login</h1>
      <p className={Text.error_message}>{inputError}</p>
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input
          className={Input.container}
          type="email"
          placeholder="email"
          value={email}
          onChange={onEmailChange}
          required={true}
        />

        <input
          className={Input.container}
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
          required={true}
        />

        <button className={Button.primary_btn}>LOGIN</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

LoginScreen.propTypes = LoginPageProps;

export default connect(mapStateToProps)(LoginScreen);
