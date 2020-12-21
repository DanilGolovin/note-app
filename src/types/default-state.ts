import { Auth } from './auth/auth';
import { NotesState } from '../redux/Note/note.reducer';
import { CategoryState } from '../redux/Category/category.reducer';

export type defaultState = {
  notes: NotesState;
  categories: CategoryState;
  auth: Auth;
};
