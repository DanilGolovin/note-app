import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../componets/Header';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const PrivateRouteProps = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.func]),
  rest: PropTypes.array,
};

export const PrivateRoute = (props) => {
  const { isSignedIn, authStatusReported } = useAuth();
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={() =>
        isSignedIn ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = PrivateRouteProps;

export default PrivateRoute;
