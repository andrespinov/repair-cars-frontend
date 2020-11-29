import {create} from 'apisauce';
// import SERVICES_PATHS from 'services/login/constants';


const api = create({
  baseURL: 'https://app-garage-back.herokuapp.com',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const apiMock = create({
//   baseURL: 'https://private-2860b4-garageappapi.apiary-mock.com',
//   timeout: 3000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.addResponseTransform((response) => {
//   console.log('Response', response);
//   response.data = eval(response.data);
// });

// api.addAsyncResponseTransform(async (response) => {
//   console.log('ASDFASDFASD');
//   if (!response.ok && response.config?.url !== SERVICES_PATHS.LOGIN) {
//     console.log('QWEREWT');
//     const mockedResponse = await apiMock.any({
//       method: response.config.method,
//       url: response.config?.url,
//     });

//     response.data = mockedResponse.data;
//     response.duration = mockedResponse.duration;
//     response.problem = mockedResponse.problem;
//     response.ok = mockedResponse.ok;
//     response.status = mockedResponse.status;
//     response.headers = mockedResponse.headers;
//     response.config = mockedResponse.config;
//   }
// });

export default api;
