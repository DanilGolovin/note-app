import React, { useEffect } from 'react';

import AppRouter from './routers/AppRouter';
import { useDispatch } from 'react-redux';
import { authSuccess } from './redux/Auth/auth.actions';
import { firebaseApp } from './firebase/firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(authSuccess({ email: user.email }));
      }
    });
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
