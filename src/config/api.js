import {create} from 'apisauce';

const api = create({
  baseURL: 'https://app-garage-back.herokuapp.com',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
