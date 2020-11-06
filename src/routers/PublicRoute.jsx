import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PublicRouteProps = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.func]),
  rest: PropTypes.array,
};

export const PublicRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={() =>
        isAuthenticated ? (
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
