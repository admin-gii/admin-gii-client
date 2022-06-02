import React from 'react';
import { hoc } from '@utils/hoc';
import { useProtectedRouteProps } from './protected-route.props';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

/**
 * <ProtectedRoute />
 */
export const ProtectedRoute = hoc(
  useProtectedRouteProps,
  ({ component: Component, profile, ...rest }) => (
    <Route
      {...rest}
      component={(props: RouteComponentProps) =>
        profile ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
);
