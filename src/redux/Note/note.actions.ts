import { 
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  START_ADD_NOTE,
  START_DELETE_NOTE,
  START_UPDATE_NOTE
} from './note.types';

import { Note } from '../../types/note/note';



export const startAddNote = (note: Note, uid: string) => ({
  type: START_ADD_NOTE,
  payload: { note, uid },
});

export const startDeleteNote = (id: string, uid: string) => ({
  type: START_DELETE_NOTE,
  payload: { id, uid },
});

export const startUpdateNote = (note: Note, uid: string) => ({
  type: START_UPDATE_NOTE,
  payload: { note, uid },
});

export const getNotes = (notes: Note[]) => ({
  type: GET_NOTES,
  payload: { notes },
});

export const addNote = (note: Note, id: string) => ({
  type: ADD_NOTE,
  payload: { note, id },
});

export const deleteNote = (id: string) => ({
  type: DELETE_NOTE,
  payload: { id },
});

export const updateNote = (note: Note) => ({
  type: UPDATE_NOTE,
  payload: { note },
});

export type NoteActions = ReturnType<
  typeof getNotes |
  typeof startAddNote |
  typeof startDeleteNote |
  typeof startUpdateNote |
  typeof addNote |
  typeof deleteNote |
  typeof updateNote
>;
