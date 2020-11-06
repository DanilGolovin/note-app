import {
  AUTH_LOGIN_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT_USER,
  AUTH_SIGNUP_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './auth.types';

export const authLogin = (user) => ({
  type: AUTH_LOGIN_USER,
  payload: {
    user,
  },
});

export const authSignup = (user) => ({
  type: AUTH_SIGNUP_USER,
  payload: {
    user,
  },
});

export const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  payload: {
    user,
  },
});

export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: {
    error,
  },
});

export const logout = () => ({
  type: LOGOUT_USER,
});

export const logoutSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutError = () => ({
  type: LOGOUT_USER_ERROR,
});
