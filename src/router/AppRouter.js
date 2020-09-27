import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { TheNavbar } from '../components/TheNavbar';
import { LandingScreen } from './../screens/LandingScreen';
import { startLoadingData } from './../actions/money';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.email) {
        await dispatch(startLoadingData(user.email));
        dispatch(login(user.uid, user.email, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <TheNavbar />
      <Switch>
        <PublicRoute
          isAuthenticated={isLoggedIn}
          exact
          path="/"
          component={LandingScreen}
        />
        <PublicRoute
          isAuthenticated={isLoggedIn}
          path="/auth"
          component={AuthRouter}
        />
        <PrivateRoute
          isAuthenticated={isLoggedIn}
          path="/logged"
          component={AuthenticatedRouter}
        />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};
