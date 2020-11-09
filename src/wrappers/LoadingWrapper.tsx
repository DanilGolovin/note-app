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

  return isLoading || !isAuthReady ? <Loader /> : children;
};

export default LoadingWrapper;
