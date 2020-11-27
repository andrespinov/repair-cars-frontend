import {actionCreators} from '../login/actions';

const initialState = {
  token: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionCreators.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload
      };
      case actionCreators.LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
