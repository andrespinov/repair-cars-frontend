import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../app/pages/Login';
import AuthRoute from './AuthRoute';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/login" />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
