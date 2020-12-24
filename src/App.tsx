import React, { useEffect } from 'react';

import AppRouter from './routers/AppRouter';
import { useDispatch } from 'react-redux';
import { authSuccess, setAuthReady } from './redux/Auth/auth.actions';
import { firebaseApp } from './firebase/firebase';
import { User } from './types/auth/user';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user && user.email !== '' && user.email !== null) {
        const userAuth: User = {
          email: user.email,
          uid: user.uid
        };
        dispatch(authSuccess(userAuth));
      }
      dispatch(setAuthReady())
    });
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
