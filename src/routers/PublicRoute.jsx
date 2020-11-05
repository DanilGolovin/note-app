import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const PublicRouteProps = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.func]),
  rest: PropTypes.array,
};

export const PublicRoute = (props) => {
  const { isSignedIn, authStatusReported } = useAuth();
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={() =>
        isSignedIn ? (
          <Redirect to="/dashboard" />
        ) : (
          <div>
            <Component {...props} />
          </div>
        )
      }
    />
  );
};

PublicRoute.propTypes = PublicRouteProps;

export default PublicRoute;
