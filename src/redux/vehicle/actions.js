import * as service from '../../services/vehicle';

const actionCreators = {
  GET_VEHICLES: 'GET_VEHICLES',
  GET_VEHICLES_SUCCESS: 'GET_VEHICLES_SUCCESS',
  GET_VEHICLES_FAILURE: 'GET_VEHICLES_FAILURE',
  
  ADD_VEHICLE: 'ADD_VEHICLE',
  ADD_VEHICLE_SUCCESS: 'ADD_VEHICLE_SUCCESS',
  ADD_VEHICLE_FAILURE: 'ADD_VEHICLE_FAILURE',
  
  UPDATE_VEHICLE: 'UPDATE_VEHICLE',
  UPDATE_VEHICLE_SUCCESS: 'UPDATE_VEHICLE_SUCCESS',
  UPDATE_VEHICLE_FAILURE: 'UPDATE_VEHICLE_FAILURE',
  
  DELETE_VEHICLE: 'DELETE_VEHICLE',
  DELETE_VEHICLE_SUCCESS: 'DELETE_VEHICLE_SUCCESS',
  DELETE_VEHICLE_FAILURE: 'DELETE_VEHICLE_FAILURE',
};

const addVehicle = (payload) => (dispatch) => {
  dispatch(addVehicleRequest());
  return service.addVehicle(payload).then(({data}) => {
    console.log(data)
    if (data?.data) {
      dispatch(addVehicleSuccess(data.data));
    } else {
      dispatch(addVehicleFailure(data?.message));
    }
  });
};

const updateVehicle = (payload) => (dispatch) => {
  dispatch(updateVehicleRequest());
  return service.updateVehicle(payload).then(({data}) => {
    console.log(data)
    if (data?.data) {
      dispatch(updateVehicleSuccess(data.data));
    } else {
      dispatch(updateVehicleFailure(data?.message));
    }
  });
};

const addVehicleRequest = (payload) => ({
  type: actionCreators.ADD_VEHICLE,
  payload,
});

const addVehicleSuccess = (payload) => ({
  type: actionCreators.ADD_VEHICLE_SUCCESS,
  payload,
});

const addVehicleFailure = (payload) => ({
  type: actionCreators.ADD_VEHICLE_FAILURE,
  payload,
});

const updateVehicleRequest = (payload) => ({
  type: actionCreators.UPDATE_VEHICLE,
  payload,
});

const updateVehicleSuccess = (payload) => ({
  type: actionCreators.UPDATE_VEHICLE_SUCCESS,
  payload,
});

const updateVehicleFailure = (payload) => ({
  type: actionCreators.UPDATE_VEHICLE_FAILURE,
  payload,
});

export {actionCreators, addVehicle, updateVehicle};
