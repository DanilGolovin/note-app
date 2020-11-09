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

const INITIAL_STATE = {
  loading: false,
  error: {},
  user: {},
  isAuthenticated: false,
  isAuthReady: false,
};

const reducer: Reducer<typeof INITIAL_STATE, AuthActions> = (state = INITIAL_STATE, action) => {
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
      const { user } = action.payload;

      return {
        ...state,
        user,
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
