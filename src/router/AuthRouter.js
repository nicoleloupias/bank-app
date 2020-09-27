import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LandingScreen } from './../screens/LandingScreen';

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingScreen} />
      <Route exact path="/auth/login" component={LoginScreen} />

      <Route exact path="/auth/register" component={RegisterScreen} />

      <Redirect to="/auth/login" />
    </Switch>
  );
};
