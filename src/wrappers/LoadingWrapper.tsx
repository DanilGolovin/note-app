import React from 'react';
import { useSelector } from 'react-redux';

import Loader from '../componets/Loader';

import { defaultState } from '../types/default-state';

type Props = {
  children: JSX.Element;
};

const LoadingWrapper = ({ children }: Props) => {
  const isLoading = useSelector((state: defaultState) => state.auth.loading);
  const isAuthReady = useSelector((state: defaultState) => state.auth.isAuthReady);
  const isAuthenticated = useSelector((state: defaultState) => state.auth.isAuthenticated);

  if (isLoading) return  <Loader /> 
  else if (!isAuthReady && !isAuthenticated) return <Loader/>
  else return children
};

export default LoadingWrapper;
