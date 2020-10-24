import api from '../../config/api';
import routes from './routes';

const login = async () => {
  return api.post(routes.LOGIN);
};

export {login};
