import * as service from '../../services/login';

const actionCreators = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return service.login(payload).then((response) => {
    if (response.data?.token) {
      dispatch(loginSuccess(response.data.token));
    } else {
      dispatch(loginFailure(response.data?.message));
    }
  });
};

const loginRequest = (payload) => ({
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
