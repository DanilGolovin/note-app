import { 
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  START_ADD_NOTE,
  START_DELETE_NOTE,
  START_UPDATE_NOTE,
  START_GET_NOTES,
  GET_NOTES
} from './note.types';

import { Note } from '../../types/note/note';
import { Reducer } from 'redux';
import { NoteActions } from './note.actions';

export interface NotesState {
  notes: Note[],
  loading: boolean,
}

const  INITIAL_STATE: NotesState = {
  notes: [],
  loading: false
}

const reducer: Reducer<typeof INITIAL_STATE, NoteActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {  
    case START_GET_NOTES: {
      return {
        ...state,
        loading: true
      }
    }
    case START_ADD_NOTE: {
      return {
        ...state,
        loading: true,
      }
    }
    case START_DELETE_NOTE: {
      return {
        ...state,
        loading: true,
      }
    }
    case START_UPDATE_NOTE: {
      return {
        ...state,
        loading: true,
      }
    }  
    case GET_NOTES: {
      return {
        ...state,
        loading: false,  
        notes: action.payload.notes
      }
    }
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, {...action.payload.note, id: action.payload.id}],
        loading: false,
      }
    }
    case DELETE_NOTE: {
      const notes = state.notes.filter((note) => note.id !== action.payload.id);
      return {
        ...state,
        notes,
        loading: false,
      }
    }
    case UPDATE_NOTE: {
      const notes = state.notes.map((note) => {
        if (note.id !== action.payload.note.id) return note
        else return action.payload.note
      });

      return {
        ...state,
        notes,
        loading: false,
      }
    }
    default:
      return state;
  }
};

export default reducer;
