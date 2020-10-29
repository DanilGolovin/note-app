import { combineReducers } from 'redux';

import noteReducer from './Note/note.reducer';
import categoryReducer from './Category/category.reducer';
import authReducer from './Auth/auth.reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  categories: categoryReducer,
  auth: authReducer,
});

export default rootReducer;
