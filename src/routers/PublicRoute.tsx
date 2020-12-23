import React, { ComponentProps } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';

export const PublicRoute = ({ component: Component, ...props }: RouteProps) => {
  const isAuthenticated = useSelector((state: defaultState) => state.auth.isAuthenticated);
  return (
    <Route
      exact={true}
      render={(rest: ComponentProps<any>) =>
        isAuthenticated ? (
          <>
            {console.log(rest)}
            <Redirect to="/dashboard" />
          </>
        ) : (
          <>{Component ? <Component {...rest} /> : null}</>
        )
      }
      {...props}
    />
  );
};

export default PublicRoute;
