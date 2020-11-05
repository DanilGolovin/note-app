// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { firebaseApp } from '../firebase/firebase';
// import { authSuccess, logoutSuccess } from '../redux/Auth/auth.actions';
// import { useDispatch } from 'react-redux';
// export const FirebaseAuthContext = React.createContext();
//
// const AuthProviderProps = {
//   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
// };
//
// const AuthProvider = (props) => {
//   const [authStatusReported, setAuthStatusReported] = useState(false);
//   const [isUserSignedIn, setIsUserSignedIn] = useState(false);
//
//   const dispatch = useDispatch();
//
//   const actionUser = {
//     email: 'email@user.com',
//   };
//   useEffect(() => {
//     firebaseApp.auth().onAuthStateChanged((user) => {
//       dispatch(authSuccess(actionUser));
//     });
//   }, []);
//   return (
//     <FirebaseAuthContext.Provider
//       value={{
//         isUserSignedIn,
//         authStatusReported,
//       }}
//     >
//       {props.children}
//       {/*{authStatusReported && props.children}*/}
//     </FirebaseAuthContext.Provider>
//   );
// };
//
// AuthProvider.propTypes = AuthProviderProps;
//
// export default AuthProvider;
