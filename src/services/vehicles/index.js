import api from 'config/api';

import PATHS from './constants';

export const fetchVehicles = () => api.get(PATHS.VEHICLES);
