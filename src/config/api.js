import {create} from 'apisauce';
// import SERVICES_PATHS from 'services/login/constants';

const api = create({
  baseURL: 'https://app-garage-back.herokuapp.com',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.addRequestTransform(request => {
  const persistedAuth = JSON.parse(window.localStorage.getItem('persist:root'));
  const authtoken = JSON.parse(persistedAuth.authReducer).token;
  request.headers['Authorization'] = authtoken;
})

export default api;
