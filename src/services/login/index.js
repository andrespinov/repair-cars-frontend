import api from 'config/api';
import SERVICES_PATHS from 'services/constants';


const login = async (payload) => {
  return api.post(SERVICES_PATHS.LOGIN, payload);
};

export {login};
