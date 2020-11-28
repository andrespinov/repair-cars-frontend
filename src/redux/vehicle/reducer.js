import {actionCreators} from './actions';

const initialState = {
  vehicles: [],
  loading: false,
  error: '',
  formLoading: false,
  formError: ''
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionCreators.ADD_VEHICLE:
    case actionCreators.UPDATE_VEHICLE:
      return {
        ...state,
        formLoading: true,
        formError: '',
      };

    case actionCreators.ADD_VEHICLE_SUCCESS:
    case actionCreators.UPDATE_VEHICLE_SUCCESS:
      return {
        ...state,
        formLoading: false,
        formError: '',
      };

    case actionCreators.ADD_VEHICLE_FAILURE:
    case actionCreators.UPDATE_VEHICLE_FAILURE:
      return {
        ...state,
        formLoading: false,
        formError: payload,
      };
    default:
      return state;
  }
};

export default reducer;
