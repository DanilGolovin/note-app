import {
  AUTH_LOGIN_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT_USER,
  AUTH_SIGNUP_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  AUTH_READY,
} from './auth.types';

import { User } from '../../types/auth/user';
import { Error } from '../../types/auth/error';

export const authLogin = (user: User) => ({
  type: AUTH_LOGIN_USER,
  payload: {
    user,
  },
});

export const authSignup = (user: User) => ({
  type: AUTH_SIGNUP_USER,
  payload: {
    user,
  },
});

export const authSuccess = (user: User) => ({
  type: AUTH_SUCCESS,
  payload: {
    user,
  },
});

export const authError = (error: Error) => ({
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

export const setAuthReady = () => ({
  type: AUTH_READY,
});

export type AuthActions = ReturnType<
  | typeof authLogin
  | typeof authSignup
  | typeof authSuccess
  | typeof authError
  | typeof logout
  | typeof logoutSuccess
  | typeof logoutError
  | typeof setAuthReady
>;
