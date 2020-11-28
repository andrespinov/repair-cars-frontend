import api from '../../config/api';

import routes from './routes';

const getVehicles = async () => {
  return api.get(routes.VEHICLES);
};

const addVehicle = async (payload) => {
  return api.post(routes.VEHICLES, payload);
};

const updateVehicle = async (payload) => {
  return api.put(routes.VEHICLE(payload.id), payload);
};

const deleteVehicle = async (id) => {
  return api.delete(routes.VEHICLE(id));
};

export {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle
};
