import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../../redux/login/actions';

import LoginForm from './components/LoginForm';
import {LoginContainer} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.loginReducer);
  const handleLogin = (payload) => {
    dispatch(login(payload));
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </LoginContainer>
  );
};

export default Login;
