import { ADD_NOTE, DELETE_NOTE } from './note.types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return state.concat([action.data]);

    case DELETE_NOTE:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default reducer;
