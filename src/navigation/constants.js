import Home from '../app/pages/Home';
import Login from '../app/pages/Login';

export const PATHS = {
  home: '/',
  login: '/login',
};

const MAIN_PUBLIC_PATH = PATHS.login;
const MAIN_PRIVATE_PATH = PATHS.home;

export const ROUTES = [
  {
    path: PATHS.login,
    component: Login,
    redirectTo: (user) => (user ? MAIN_PRIVATE_PATH : undefined),
  },
  {
    path: PATHS.home,
    component: Home,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
];
