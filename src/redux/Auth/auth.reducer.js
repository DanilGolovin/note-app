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
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN_USER:
      return { loading: true, error: { hasError: false, errorMessage: '' } };

    case AUTH_SIGNUP_USER:
      return { loading: true, error: { hasError: false, errorMessage: '' } };

    case AUTH_SUCCESS:
      return { ...state, action, loading: false, error: { hasError: false, errorMessage: '' } };
    case AUTH_ERROR:
      return {
        ...state,
        action,
        loading: false,
        error: { hasError: true, errorMessage: action.error },
      };

    case LOGOUT_USER:
      return { loading: true, error: { hasError: false, errorMessage: '' } };
    case LOGOUT_USER_SUCCESS:
      return { loading: false, error: { hasError: false, errorMessage: '' } };
    case LOGOUT_USER_ERROR:
      return { loading: false, error: { hasError: true, errorMessage: 'Logout error' } };

    default:
      return state;
  }
};

// const INITIAL_STATE = {
//   currentUser: null,
//   error: null,
// };
//
// const authReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case LOG_IN_SUCCESS:
//       return {
//         ...state,
//         currentUser: action.payload,
//         error: null,
//       };
//     case LOG_IN_FAILURE:
//     case REGISTER_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case LOG_OUT:
//       return INITIAL_STATE;
//     default:
//       return state;
//   }
// };
