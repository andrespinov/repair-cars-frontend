import {actionCreators} from './actions';

const initialState = {
  loading: false,
  error: '',
  token: '',
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionCreators.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actionCreators.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        error: '',
      };
    case actionCreators.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
