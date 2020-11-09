import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './note.types';
import { Note } from '../../types/note/note';

export const addNote = (note: Note) => ({
  type: ADD_NOTE,
  payload: { note },
});

export const deleteNote = (id: string) => ({
  type: DELETE_NOTE,
  payload: { id },
});

export const updateNote = (note: Note) => ({
  type: UPDATE_NOTE,
  payload: { note },
});

export type NoteActions = ReturnType<typeof addNote | typeof deleteNote | typeof updateNote>;
