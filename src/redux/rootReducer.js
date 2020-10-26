import { combineReducers } from 'redux';

import noteReducer from './Note/note.reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
});

export default rootReducer;
