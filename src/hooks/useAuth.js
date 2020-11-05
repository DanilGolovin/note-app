import { FirebaseAuthContext } from '../providers/AuthProvider';
import React from 'react';
import { useSelector } from 'react-redux';

export default function () {
  const { authStatusReported, isUserSignedIn } = React.useContext(FirebaseAuthContext);
  const { errorMessage, hasError } = useSelector((state) => state.auth.error);

  return {
    isSignedIn: isUserSignedIn,
    authStatusReported,
    errorMessage,
    hasError,
  };
}
