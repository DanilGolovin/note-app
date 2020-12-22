import { Auth } from './auth/auth';
import { NotesState } from '../redux/Note/note.reducer';
import { CategoryState } from '../redux/Category/category.reducer';
import { NoteThemesType } from '../redux/NoteTheme/note.theme.reducer';

export type defaultState = {
  notes: NotesState;
  categories: CategoryState;
  auth: Auth;
  noteTheme: NoteThemesType;
};
