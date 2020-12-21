import { combineReducers } from 'redux';

import notes from './Note/note.reducer';
import categories from './Category/category.reducer';
import auth from './Auth/auth.reducer';
import noteThemes from './NoteTheme/note.theme.reducer';

const rootReducer = combineReducers({
  notes,
  categories,
  auth,
  noteThemes,
});

export default rootReducer;
