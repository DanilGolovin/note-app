import { combineReducers } from 'redux';

import noteReducer from './Note/note.reducer';
import categoryReducer from './Category/category.reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  categories: categoryReducer,
});

export default rootReducer;
