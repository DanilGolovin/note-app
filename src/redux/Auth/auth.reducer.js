import { LOGIN, LOGOUT } from './auth.types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      localStorage.setItem('email', action.payload);
      localStorage.setItem('isAuthenticated', true);

      return {
        email: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      console.log(action);
      localStorage.removeItem('email');
      localStorage.removeItem('isAuthenticated');
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
