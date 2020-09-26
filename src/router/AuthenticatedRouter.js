import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DashboardScreen } from './../screens/DashboardScreen';
import { TransferScreen } from './../screens/TransferScreen';
import { DepositScreen } from './../screens/DepositScreen';
import { LastMovementsScreen } from './../screens/LastMovementsScreen';

export const AuthenticatedRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/logged/dashboard" component={DashboardScreen} />
          <Route exact path="/logged/transfer" component={TransferScreen} />
          <Route exact path="/logged/deposit" component={DepositScreen} />
          <Route
            exact
            path="/logged/last-movements"
            component={LastMovementsScreen}
          />

          {/* <Redirect to="/dashboard" /> */}
        </Switch>
      </div>
    </div>
  );
};
