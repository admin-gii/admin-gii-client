import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './login';

export const AuthRoutes: FC = () => {
  return (
    <Switch>
      <Route path='' component={Login} />
    </Switch>
  );
};
