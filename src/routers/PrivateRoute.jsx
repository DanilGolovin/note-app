import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../componets/Header';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRouteProps = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.func]),
  rest: PropTypes.array,
};

export const PrivateRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={() =>
        isAuthenticated ? (
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
