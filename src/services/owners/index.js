import api from 'config/api'

import PATHS from './constants'

export const fetchOwners = () => api.get('/owner');

const OwnerService = {
  fetchOwners: () => api.get('/owner'),
  removeOwner: (id) => api.delete(`/owner/${id}`)
}

export const updateOwner = (payload) =>
  api.put(`${PATHS.OWNER}/${payload._id}`, payload);

export const createOwner = (payload) => api.post(PATHS.OWNER, payload);

export default OwnerService;