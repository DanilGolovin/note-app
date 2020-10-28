import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './note.types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return state.concat([action.payload]);
    }
    case DELETE_NOTE: {
      return state.filter((note) => note.id !== action.payload);
    }
    case UPDATE_NOTE: {
      console.log(action);
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            title: action.payload.title,
            description: action.payload.description,
            category: action.payload.category,
          };
        } else return note;
      });
    }
    default:
      return state;
  }
};

export default reducer;
