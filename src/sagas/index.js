import { all, spawn } from 'redux-saga/effects';
//import { fork } from 'redux-saga/effects';
import auth from './auth';

export default function* startWatch() {
  yield all([spawn(auth)]);
}
