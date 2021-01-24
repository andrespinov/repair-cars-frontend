import api from 'config/api'

export const fetchOwners = () => api.get('/owners');