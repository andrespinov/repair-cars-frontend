import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../app/hooks/useAuth';

const AuthRoute = ({needAuthentication, ...props}) => {
  const {isAuthenticated} = useAuth();

  return (needAuthentication && isAuthenticated) ||
    (!needAuthentication && !isAuthenticated) ? (
    <Route {...props} />
  ) : (
    <Redirect to="/home" />
  );
};

AuthRoute.propTypes = {
  needAuthentication: PropTypes.bool,
};

export default AuthRoute;
