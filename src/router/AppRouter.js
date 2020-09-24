import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { DashboardScreen } from './../screens/DashboardScreen';
import { LandingScreen } from './../screens/LandingScreen';
import { TheNavbar } from '../components/TheNavbar';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const auth = useSelector((state) => state.auth);
  useEffect(() => {
    console.log('hola auth');
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.email) {
        console.log(user);
        console.log('hola');
        dispatch(login(user.email, user.displayName));
        setIsLoggedIn(true);
        // dispatch(startLoadingNotes(user.uid));
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
          path="/auth"
          component={AuthRouter}
        />
        {/* <PublicRoute
        //   isAuthenticated={isLoggedIn}
        //   path="/"
        //   component={LandingScreen}
        // /> */}
        <PrivateRoute
          isAuthenticated={isLoggedIn}
          path="/dashboard"
          component={DashboardScreen}
        />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};
