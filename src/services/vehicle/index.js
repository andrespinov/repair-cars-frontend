import api from '../../config/api';

import PATHS from './constants';

const getVehicles = async () => {
  return api.get(PATHS.VEHICLES);
};

const addVehicle = async (payload) => {
  return api.post(PATHS.VEHICLES, payload);
};

const updateVehicle = async (payload) => {
  return api.put(PATHS.VEHICLE(payload.id), payload);
};

const deleteVehicle = async (id) => {
  return api.delete(PATHS.VEHICLE(id));
};

export {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle
};
