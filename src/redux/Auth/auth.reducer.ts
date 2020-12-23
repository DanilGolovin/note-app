import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_SIGNUP_USER,
  AUTH_LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  AUTH_READY,
} from './auth.types';

import { AuthActions } from './auth.actions';
import { Reducer } from 'redux';

type AuthType = {
  loading: boolean,
  error: {
    hasError?: boolean,
    errorMessage?: string,
  },
  user: {
    uid?: string
    email?: string,
  },
  isAuthenticated: boolean,
  isAuthReady: boolean,
}

const INITIAL_STATE: AuthType = {
  loading: false,
  error: {
    hasError: false,
    errorMessage: ''
  },
  user: {
    uid: '',
    email: ''
  },
  isAuthenticated: false,
  isAuthReady: false,
};

const reducer: Reducer<AuthType, AuthActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN_USER:
      return {
        ...state,
        isAuthenticated: false,
        isAuthReady: false,
        loading: true,
        error: { hasError: false, errorMessage: '' },
      };

    case AUTH_SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: false,
        isAuthReady: true,
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };
    case AUTH_READY: {
      return {
        ...state,
        isAuthReady: true,
      };
    }
    case AUTH_SUCCESS: {
      const { uid, email } = action.payload.user;
     
      return {
        ...state,
        user : {
          uid,
          email,
        },
        isAuthenticated: true,
        isAuthReady: true,
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };
    }

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isAuthReady: true,
        loading: false,
        error: { hasError: true, errorMessage: action.payload.error.errorMessage },
      };

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: true,
        isAuthReady: true,
        loading: true,
        error: { hasError: false, errorMessage: '' },
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isAuthReady: true,
        user: {},
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isAuthReady: true,
        user: {},
        loading: false,
        error: { hasError: true, errorMessage: 'Logout error' },
      };

    default:
      return state;
  }
};

export default reducer;
