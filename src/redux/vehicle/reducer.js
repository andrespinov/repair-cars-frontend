import {actionCreators} from './actions';

const initialState = {
  vehicles: [],
  loading: false,
  error: '',
  saveLoading: false,
  deleteLoading: false,
  formError: ''
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionCreators.ADD_VEHICLE:
    case actionCreators.UPDATE_VEHICLE:
      return {
        ...state,
        saveLoading: true,
        formError: '',
      };

    case actionCreators.ADD_VEHICLE_SUCCESS:
    case actionCreators.UPDATE_VEHICLE_SUCCESS:
      return {
        ...state,
        saveLoading: false,
        formError: '',
      };

    case actionCreators.ADD_VEHICLE_FAILURE:
    case actionCreators.UPDATE_VEHICLE_FAILURE:
      return {
        ...state,
        saveLoading: false,
        formError: payload,
      };
    case actionCreators.DELETE_VEHICLE:
      return {
        ...state,
        deleteLoading: true,
        formError: '',
      };
  
    case actionCreators.DELETE_VEHICLE_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        formError: '',
      };
  
    case actionCreators.DELETE_VEHICLE_FAILURE:
      return {
        ...state,
        deleteLoading: false,
        formError: payload,
      };
    default:
      return state;
  }
};

export default reducer;
