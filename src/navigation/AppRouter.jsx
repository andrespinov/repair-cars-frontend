import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import useAuthState from '../app/hooks/useAuthState';

import Navbar from './components/Navbar'
import RouteItem from './components/RouteItem';
import {ROUTES} from './constants';

const AppRouter = () => {
  const {isAuthenticated} = useAuthState();

  return (
    <Router>
      <Navbar />
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
