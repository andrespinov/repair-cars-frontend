import api from 'config/api';

import PATHS from './constants';

export const fetchVehicles = () => api.get(PATHS.VEHICLES);

export const deleteVehicle = (id) => api.delete(`${PATHS.VEHICLES}/${id}`);

export const updateVehicle = (payload) =>
  api.put(`${PATHS.VEHICLES}/${payload._id}`, payload);

export const createVehicle = (payload) => api.post(PATHS.VEHICLES, payload);