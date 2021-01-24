import api from 'config/api';

import PATHS from './constants';

export const fetchOwners = () => api.get(PATHS.OWNER);

export const deleteOwner = (id) => api.delete(`${PATHS.OWNER}/${id}`);

export const updateOwner = (payload) =>
  api.put(`${PATHS.OWNER}/${payload._id}`, payload);

export const createOwner = (payload) => api.post(PATHS.OWNER, payload);
