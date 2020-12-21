import { 
    ADD_NOTE_THEME,
    DELETE_NOTE_THEME,
    GET_NOTE_THEMES,
    START_ADD_NOTE_THEME,
    START_DELETE_NOTE_THEME,
    START_GET_NOTE_THEMES,
    START_UPDATE_NOTE_THEME, 
    UPDATE_NOTE_THEME
  } from './note.theme.types';
  
  import { Reducer } from 'redux';
  import { NoteThemeActions } from './note.theme.actions';
    
  const  INITIAL_STATE: any = {
    noteThemes: [],
    loading: false
  }
  
  const reducer: Reducer<typeof INITIAL_STATE, NoteThemeActions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
      case START_GET_NOTE_THEMES: {
        return {
          ...state,
          loading: true
        }
      }
      case START_ADD_NOTE_THEME: {
        return {
          ...state,
          loading: true,
        }
      }
      case START_DELETE_NOTE_THEME: {
        return {
          ...state,
          loading: true,
        }
      }
      case START_UPDATE_NOTE_THEME: {
        return {
          ...state,
          loading: true,
        }
      }  
      case GET_NOTE_THEMES: {
        return {
          ...state,
          loading: false,  
          noteThemes: action.payload.noteThemes
        }
      }
      case ADD_NOTE_THEME: {
        const noteThemes = state.noteThemes
        const noteTheme = action.payload.noteTheme
        noteTheme.id = action.payload.id
  
        noteThemes.push(noteTheme)
        
        return {
          ...state,
          noteThemes,
          loading: false,
        }
      }
      case DELETE_NOTE_THEME: {
        const noteThemes = state.noteThemes.filter((noteTheme: any) => noteTheme.id !== action.payload.id);
        return {
          ...state,
          noteThemes,
          loading: false,
        }
      }
      case UPDATE_NOTE_THEME: {
        const noteThemes = state.notes.map((noteTheme: any) => {
          if (noteTheme.id !== action.payload.noteTheme.id) return noteTheme
          else return action.payload.noteTheme
        });
  
        return {
          ...state,
          noteThemes,
          loading: false,
        }
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  