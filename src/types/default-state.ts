import { Auth } from './auth/auth';
import { Note } from './note/note';
import { Category } from './category/category';

export type defaultState = {
  notes: Note[];
  categories: Category[];
  auth: Auth;
};
