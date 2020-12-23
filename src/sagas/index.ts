import { all, spawn } from 'redux-saga/effects';
//import { fork } from 'redux-saga/effects';
import auth from './auth';
import categories from './categories';
import notes from './notes';
import noteThemes from './noteThemes';

export default function* startWatch() {
  yield all([spawn(auth), spawn(notes), spawn(categories), spawn(noteThemes)]);
}
