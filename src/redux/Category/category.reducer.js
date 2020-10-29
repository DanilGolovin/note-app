import { ADD_CATEGORY, DELETE_CATEGORY } from './category.types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      return state.concat([action.payload]);
    }
    case DELETE_CATEGORY: {
      return state.filter((category) => category.name !== action.payload.name);
    }
    default:
      return state;
  }
};

export default reducer;
