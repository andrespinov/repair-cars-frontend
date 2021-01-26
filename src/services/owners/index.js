import api from 'config/api'

import PATHS from './constants'

export const fetchOwners = () => api.get('/owners');

const OwnerService = {
  fetchOwners: () => api.get('/owners'),
  removeOwner: (id) => api.delete(`/owners/${id}`)
}

export const updateOwner = (payload) =>
  api.put(`${PATHS.OWNER}/${payload._id}`, payload);

export const createOwner = (payload) => api.post(PATHS.OWNER, payload);

export default OwnerService;