import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../componets/Header';
import PropTypes from 'prop-types';

const PrivateRouteProps = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.node,
  rest: PropTypes.array,
};

export const PrivateRoute = (props) => {
  const { isAuthenticated, component: Component, ...rest } = props;

  const user = useMemo(
    () => (isAuthenticated ? isAuthenticated : localStorage.getItem('isAuthenticated')),
    [isAuthenticated],
  );

  return (
    <Route
      {...rest}
      component={(props) =>
        user ? (
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

PrivateRoute.propTypes = PrivateRouteProps;

export default connect(mapStateToProps)(PrivateRoute);
