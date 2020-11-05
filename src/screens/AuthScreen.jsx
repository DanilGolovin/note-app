import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../styles/Form.module.css';
import Input from '../styles/Input.module.css';
import Button from '../styles/Button.module.css';

import Container from '../styles/Container.module.css';
import Text from '../styles/Text.module.css';

import { authLogin, authSignup } from '../redux/Auth/auth.actions';
import useAuth from '../hooks/useAuth';

const AuthScreen = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [login, setLogin] = useState(true);

  const [authError, setAuthError] = useState(useAuth().errorMessage);

  const hasError = useAuth().hasError;

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setAuthError('');
    setInputError('');
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setAuthError('');
    setInputError('');
  };

  const validateEmail = () => {
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(email.toLowerCase());
  };

  const validatePassword = () => {
    const rePassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    return rePassword.test(password);
  };

  const onLoginClick = () => {
    setLogin(!login);
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
      if (login) {
        dispatch(authLogin({ email, password }));
      } else {
        dispatch(authSignup({ email, password }));
      }
      if (!hasError) {
        setEmail('');
        setPassword('');
      }
    }
  };

  return (
    <div className={Container.center + ' ' + Container.login_wrapper}>
      <div className={Form.wrapper}>
        {login ? <h1>Login</h1> : <h1>Create Account</h1>}
        <form className={Form.content} onSubmit={onSubmit}>
          <input
            className={Input.container}
            type="email"
            placeholder="email"
            value={email}
            onChange={onEmailChange}
            required={true}
            autoComplete="on"
          />
          <input
            className={Input.container}
            type="password"
            placeholder="password"
            value={password}
            onChange={onPasswordChange}
            required={true}
          />

          <button className={Button.primary_btn}>{login ? 'LOGIN' : 'SIGN UP'}</button>
          <div>
            {login ? (
              <>
                <span>Not registered? </span>
                <span className={Text.outlined_text} onClick={onLoginClick}>
                  Create an account.
                </span>
              </>
            ) : (
              <>
                <span>Already have an account? </span>
                <span className={Text.outlined_text} onClick={onLoginClick}>
                  Log in.
                </span>
              </>
            )}
          </div>
        </form>

        <div className={Container.error_wrapper}>
          <div className={authError || inputError ? Container.error : Container.error_hidden}>
            <p className={Text.error_message}> {authError ? authError : ''}</p>
            <p className={Text.error_message}>{inputError}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
