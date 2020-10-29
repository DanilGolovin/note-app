import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRouteProps = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.object,
  rest: PropTypes.array,
};

export const PublicRoute = (props) => {
  const { isAuthenticated, component: Component, ...rest } = props;

  const user = useMemo(
    () => (isAuthenticated ? isAuthenticated : localStorage.getItem('isAuthenticated')),
    [isAuthenticated],
  );

  return (
    <Route
      {...rest}
      component={(props) => (user ? <Redirect to="/dashboard" /> : <Component {...props} />)}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

PublicRoute.propTypes = PublicRouteProps;

export default connect(mapStateToProps)(PublicRoute);
