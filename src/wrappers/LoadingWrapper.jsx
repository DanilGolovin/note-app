import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Loader from '../componets/Loader';

const LoadingWrapperProps = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
};

const LoadingWrapper = ({ children }) => {
  const isLoading = useSelector((state) => state.auth.loading);

  return isLoading ? <Loader /> : children;
};

LoadingWrapper.propTypes = LoadingWrapperProps;

export default LoadingWrapper;
