import PATHS from 'constants/paths';

import Home from 'app/pages/Home';
import Login from 'app/pages/Login';
import VehiclesList from 'app/pages/VehiclesList';

export const ROUTES_PATHS = {
  VEHICLES: '/vehicles',
  HOME: '/',
  LOGIN: '/login',
};

const MAIN_PUBLIC_PATH = PATHS.LOGIN;
const MAIN_PRIVATE_PATH = PATHS.HOME;

export const ROUTES = [
  {
    path: PATHS.LOGIN,
    component: Login,
    redirectTo: (user) => (user ? MAIN_PRIVATE_PATH : undefined),
  },
  {
    path: PATHS.HOME,
    component: Home,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.VEHICLES,
    component: VehiclesList,
  },
];
