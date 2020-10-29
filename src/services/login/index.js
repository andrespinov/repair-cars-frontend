import api from '../../config/api';

import routes from './routes';

const login = async (payload) => {
  return api.post(routes.LOGIN, payload);
};

export {login};
