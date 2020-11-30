import api from 'config/api';
import PATHS from 'services/login/constants';

const login = async (payload) => {
  return api.post(PATHS.LOGIN, payload);
};

export {login};
