import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_SIGNUP_USER,
  AUTH_LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
} from './auth.types';

const INITIAL_STATE = {
  loading: false,
  error: { hasError: false, errorMessage: '' },
  user: {},
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN_USER:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        error: { hasError: false, errorMessage: '' },
      };

    case AUTH_SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };

    case AUTH_SUCCESS: {
      const { user } = action.payload;

      return {
        ...state,
        user,
        isAuthenticated: true,
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };
    }

    case AUTH_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: { hasError: true, errorMessage: error },
      };

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
        error: { hasError: false, errorMessage: '' },
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        loading: false,
        error: { hasError: true, errorMessage: 'Logout error' },
      };

    default:
      return state;
  }
};
