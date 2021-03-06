import {useSelector} from 'react-redux';

const useAuth = () => {
  const token = useSelector((state) => state.authReducer.token);
  return {isAuthenticated: !!token, token};
};

export default useAuth;
