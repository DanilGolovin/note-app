import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './note.types';
import { Note } from '../../types/note/note';
import { Reducer } from 'redux';
import { NoteActions } from './note.actions';

const INITIAL_STATE: Note[] = [];

const reducer: Reducer<typeof INITIAL_STATE, NoteActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return state.concat([action.payload.note]);
    }
    case DELETE_NOTE: {
      return state.filter((note) => note.id !== action.payload.id);
    }
    case UPDATE_NOTE: {
      return state.map((note) => {
        if (note.id === action.payload.note.id) {
          return {
            ...note,
            title: action.payload.note.title,
            description: action.payload.note.description,
            category: action.payload.note.category,
          };
        } else return note;
      });
    }
    default:
      return state;
  }
};

export default reducer;
