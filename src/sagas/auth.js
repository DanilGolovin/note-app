import { put, call, takeLatest, all } from 'redux-saga/effects';

import { AUTH_LOGIN_USER, AUTH_SIGNUP_USER, LOGOUT_USER } from '../redux/Auth/auth.types';

import { firebaseAuth } from '../firebase/firebase';
import { authError, authSuccess, logoutError, logoutSuccess } from '../redux/Auth/auth.actions';

export function* loginSaga(action) {
  const { email, password } = action.user;
  console.log('login with email: ', email, ' and password: ', password);

  try {
    const response = yield call([firebaseAuth, 'signInWithEmailAndPassword'], email, password);
    console.log('response: ', response);
    yield put(authSuccess(response));
  } catch (error) {
    yield put(authError(error.message));
  }
}

export function* signupSaga(action) {
  const { email, password } = action.user;
  console.log('Signup with email: ', email, ' and password: ', password);

  try {
    const response = yield call([firebaseAuth, 'createUserWithEmailAndPassword'], email, password);
    console.log('response: ', response);
    yield put(authSuccess(response));
  } catch (error) {
    yield put(authError(error.message));
  }
}

export function* logoutSaga() {
  try {
    yield call([firebaseAuth, 'signOut']);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutError());
  }
}

export default function* () {
  yield all[
    (yield takeLatest(AUTH_LOGIN_USER, loginSaga),
    yield takeLatest(AUTH_SIGNUP_USER, signupSaga),
    yield takeLatest(LOGOUT_USER, logoutSaga))
  ];
}
