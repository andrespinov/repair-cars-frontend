import {create} from 'apisauce';

const api = create({
  baseURL: 'http://ec2-3-17-193-136.us-east-2.compute.amazonaws.com',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
