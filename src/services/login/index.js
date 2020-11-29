import ROUTES from 'constants/routes';

import api from 'config/api';

const login = async (payload) => {
  return api.post(ROUTES.LOGIN, payload);
};

export {login};
