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

const addVehicle = (payload, onSuccess) => (dispatch) => {
  dispatch(addVehicleRequest());
  return service.addVehicle(payload).then((response) => {
    console.log(response)
    if (response?.data?.data) {
      dispatch(addVehicleSuccess(response.data.data));
      if (onSuccess) onSuccess();
    } else {
      dispatch(addVehicleFailure(response?.data?.message));
    }
  });
};

const updateVehicle = (payload, onSuccess) => (dispatch) => {
  dispatch(updateVehicleRequest());
  return service.updateVehicle(payload).then((response) => {
    console.log(response)
    if (response?.data?.data) {
      dispatch(updateVehicleSuccess(response.data.data));
      if (onSuccess) onSuccess();
    } else {
      dispatch(updateVehicleFailure(response?.data?.message));
    }
  });
};

const deleteVehicle = (id, onSuccess) => (dispatch) => {
  dispatch(deleteVehicleRequest());
  return service.deleteVehicle(id).then((response) => {
    console.log(response)
    if (response?.data?.data) {
      dispatch(deleteVehicleSuccess(response.data.data));
      if (onSuccess) onSuccess();
    } else {
      dispatch(deleteVehicleFailure(response?.data?.message));
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

const deleteVehicleRequest = (payload) => ({
  type: actionCreators.DELETE_VEHICLE,
  payload,
});

const deleteVehicleSuccess = (payload) => ({
  type: actionCreators.DELETE_VEHICLE_SUCCESS,
  payload,
});

const deleteVehicleFailure = (payload) => ({
  type: actionCreators.DELETE_VEHICLE_FAILURE,
  payload,
});

export {actionCreators, addVehicle, updateVehicle, deleteVehicle};
