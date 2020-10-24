import loginTypes from './loginTypes';

const actionCreators = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

const login = (payload) => ({
  type: loginTypes.LOGIN,
  payload,
});

const loginSuccess = (payload) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: loginTypes.LOGIN_FAILURE,
  payload,
});

const logout = () => ({
  type: loginTypes.LOGOUT,
});

export {actionCreators, login, loginSuccess, loginFailure, logout};
