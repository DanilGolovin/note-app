import React, { ComponentProps } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import Header from '../componets/Header';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';

export const PrivateRoute = ({ component: Component, ...props }: RouteProps) => {
  const isAuthenticated = useSelector((state: defaultState) => state.auth.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);
  return (
    <Route
      render={(rest: ComponentProps<any>) =>
        isAuthenticated ? (
          <>
            <Header />
            {Component && <Component {...rest} />}
          </>
        ) : (
          <Redirect to="/" />
        )
      }
      {...props}
    />
  );
};

export default PrivateRoute;
