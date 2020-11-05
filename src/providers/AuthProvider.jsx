import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { firebaseApp } from '../firebase/firebase';
export const FirebaseAuthContext = React.createContext();

const AuthProviderProps = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const AuthProvider = (props) => {
  const [authStatusReported, setAuthStatusReported] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  //const [error, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setAuthStatusReported(true);
      setIsUserSignedIn(!!user);
    });
  }, []);
  return (
    <FirebaseAuthContext.Provider
      value={{
        isUserSignedIn,
        authStatusReported,
      }}
    >
      {props.children}
      {/*{authStatusReported && props.children}*/}
    </FirebaseAuthContext.Provider>
  );
};

AuthProvider.propTypes = AuthProviderProps;

export default AuthProvider;
