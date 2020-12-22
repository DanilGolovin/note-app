import {
    ADD_NOTE_THEME,
    DELETE_NOTE_THEME,
    GET_NOTE_THEMES,
    START_ADD_NOTE_THEME,
    START_DELETE_NOTE_THEME,
    START_GET_NOTE_THEMES,
    START_UPDATE_NOTE_THEME, 
    UPDATE_NOTE_THEME,
    START_SAVE_NOTE_THEME,
    SAVE_NOTE_THEME,
    // SAVE_NOTE_THEME,
    
} from './note.theme.types';
  
  
  export const startGetNoteThemes = (uid: string) => ({
    type: START_GET_NOTE_THEMES,
    payload: { uid },
  });
  
  export const startAddNoteTheme = (noteTheme: any, uid: string) => ({
    type: START_ADD_NOTE_THEME,
    payload: { noteTheme, uid },
  });
  
  export const startDeleteNoteTheme = (id: string, uid: string) => ({
    type: START_DELETE_NOTE_THEME,
    payload: { id, uid },
  });
  
  export const startUpdateNoteTheme = (noteTheme: any, uid: string) => ({
    type: START_UPDATE_NOTE_THEME,
    payload: { noteTheme, uid },
  });
  
  export const getNoteThemes  = (noteThemes: any) => ({
    type: GET_NOTE_THEMES,
    payload: { noteThemes },
  });
  
  export const addNoteTheme = (noteTheme: any, id: string) => ({
    type: ADD_NOTE_THEME,
    payload: { noteTheme, id },
  });
  
  export const deleteNoteTheme = (id: string) => ({
    type: DELETE_NOTE_THEME,
    payload: { id },
  });
  
  export const updateNoteTheme = (name: string, value: string | number) => ({
    type: UPDATE_NOTE_THEME,
    payload: { name, value },
  });
  
  export const startSaveNoteTheme = () => ({
    type: START_SAVE_NOTE_THEME
  })

  export const saveNoteTheme = (isSaved: boolean) => ({
    type: SAVE_NOTE_THEME,
    payload: { isSaved }
  })

  export type NoteThemeActions = ReturnType<
    typeof startGetNoteThemes |
    typeof startAddNoteTheme |
    typeof startDeleteNoteTheme |
    typeof startUpdateNoteTheme |
    typeof getNoteThemes |
    typeof deleteNoteTheme |
    typeof updateNoteTheme |
    typeof addNoteTheme | 
    typeof startSaveNoteTheme |
    typeof saveNoteTheme
  >;
  