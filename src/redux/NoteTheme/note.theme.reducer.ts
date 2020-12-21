import { 
    // ADD_NOTE_THEME,
    // DELETE_NOTE_THEME,
    // GET_NOTE_THEMES,
    // START_ADD_NOTE_THEME,
    // START_DELETE_NOTE_THEME,
    // START_GET_NOTE_THEMES,
    // START_UPDATE_NOTE_THEME, 
    UPDATE_NOTE_THEME,
    START_SAVE_NOTE_THEME,
    SAVE_NOTE_THEME,
  } from './note.theme.types';
  
  import { Reducer } from 'redux';
  import { NoteThemeActions } from './note.theme.actions';
  
  const settings = {
    height: 200,
    width: 180,
    padding: 10,
    borderRadius: 20,
    titleFontSize: 18,
    descriptionFontSize: 14,
    titleFontColor: 'rgba(0, 0, 0, 100)',
    descriptionFontColor: 'rgba(0, 0, 0, 100)',
    backgroundColor: 'rgba(255, 255, 255, 100)',
    boxShadow: ''
  }

  export type SettingsType = typeof settings

  const INITIAL_STATE = {
    settings: settings,
    loading: false
  }
  
  const reducer: Reducer<typeof INITIAL_STATE, NoteThemeActions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
      // case START_GET_NOTE_THEMES: {
      //   return {
      //     ...state,
      //     loading: true
      //   }
      // }
      // case START_ADD_NOTE_THEME: {
      //   return {
      //     ...state,
      //     loading: true,
      //   }
      // }
      // case START_DELETE_NOTE_THEME: {
      //   return {
      //     ...state,
      //     loading: true,
      //   }
      // }
      // case START_UPDATE_NOTE_THEME: {
      //   return {
      //     ...state,
      //     loading: true,
      //   }
      // }  
      // case GET_NOTE_THEMES: {
      //   return {
      //     ...state,
      //     loading: false,  
      //     noteThemes: action.payload.noteThemes
      //   }
      // }
      // case ADD_NOTE_THEME: {
      //   const noteThemes = state.noteThemes
      //   const noteTheme = action.payload.noteTheme
      //   noteTheme.id = action.payload.id
  
      //   noteThemes.push(noteTheme)
        
      //   return {
      //     ...state,
      //     noteThemes,
      //     loading: false,
      //   }
      // }
      // case DELETE_NOTE_THEME: {
      //   const noteThemes = state.noteThemes.filter((noteTheme: any) => noteTheme.id !== action.payload.id);
      //   return {
      //     ...state,
      //     noteThemes,
      //     loading: false,
      //   }
      // }
      case UPDATE_NOTE_THEME: {
        console.log(' action.payload (UPDATE_NOTE_THEME) ' , action.payload)
        const settings = {...state.settings, [action.payload.name]: action.payload.value}
        return {
          ...state,
          settings
        }
      }
      case START_SAVE_NOTE_THEME: {
        return {
          ...state,
          loading: true
        }
      }

      case SAVE_NOTE_THEME: {
        if (action.payload.isSaved) {
          return {
            ...state,
            loading: false
          }
        } else return {...state,
          loading: false,
          settings: settings}
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  