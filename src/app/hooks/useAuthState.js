import {useSelector} from 'react-redux';

const useAuth = () => {
  const token = useSelector((state) => state.loginReducer.token);
  return {isAuthenticated: !!token};
};

export default useAuth;
