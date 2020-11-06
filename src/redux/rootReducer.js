import { combineReducers } from 'redux';

import notes from './Note/note.reducer';
import categories from './Category/category.reducer';
import auth from './Auth/auth.reducer';

const rootReducer = combineReducers({
  notes,
  categories,
  auth,
});

export default rootReducer;
