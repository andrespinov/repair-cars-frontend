const actionCreators = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

const login = (payload) => ({
  type: actionCreators.LOGIN,
  payload,
});

const loginSuccess = (payload) => ({
  type: actionCreators.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: actionCreators.LOGIN_FAILURE,
  payload,
});

const logout = () => ({
  type: actionCreators.LOGOUT,
});

export {actionCreators, login, loginSuccess, loginFailure, logout};
