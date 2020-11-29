import {actionCreators} from '../login/actions';

const initialState = {
  token: null,
  user: ''
};

const reducer = (state = initialState, {type, payload, username}) => {
  switch (type) {
    case actionCreators.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        user: username
      };
      case actionCreators.LOGOUT:
      return {
        ...state,
        token: null,
        user: ''
      };
    default:
      return state;
  }
};

export default reducer;
