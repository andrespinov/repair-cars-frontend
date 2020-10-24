import {create} from 'apisauce';

const api = create({
  baseURL: 'https://www.udea.edu.co',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
