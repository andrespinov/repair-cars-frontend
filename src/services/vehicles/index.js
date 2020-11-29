import api from 'config/api';

import PATHS from './constants';

export const fetchVehicles = () => api.get(PATHS.VEHICLES);

export const deleteVehicle = (id) => api.delete(`${PATHS.VEHICLES}/${id}`);