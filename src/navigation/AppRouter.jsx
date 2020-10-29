import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../app/pages/Login';
import useAuthState from '../app/hooks/useAuthState';
import Home from '../app/pages/Home';
import RouteItem from './components/RouteItem';
import {ROUTES} from './constants';

const AppRouter = () => {
  const {isAuthenticated} = useAuthState();

  return (
    <Router>
      <Switch>
        {ROUTES.map(({redirectTo, path, ...config}) => (
          <RouteItem
            key={path}
            path={path}
            redirectTo={redirectTo?.(isAuthenticated)}
            {...config}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
