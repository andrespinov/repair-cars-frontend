import api from 'config/api'

export const fetchOwners = () => api.get('/owners');

const OwnerService = {
  fetchOwners: () => api.get('/owners'),
  removeOwner: (id) => api.delete(`/owners/${id}`)
}

export default OwnerService;