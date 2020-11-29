import PATHS from 'constants/paths';

import Home from 'app/pages/Home';
import Login from 'app/pages/Login';
import VehiclesList from 'app/pages/VehiclesList';
import VehicleForm from 'app/pages/VehicleForm';

export const PATHS = {
  home: '/',
  login: '/login'
}

export const ROUTES_PATHS = {
  VEHICLES: '/vehicles',
  HOME: '/',
  LOGIN: '/login',
  vehicleForm: '/formulario-vehiculo',
  vehicleIdForm: '/formulario-vehiculo/:id',
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
    exact: true
  },
  {
    path: PATHS.vehicleIdForm,
    component: VehicleForm,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.vehicleForm,
    component: VehicleForm,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.VEHICLES,
    component: VehiclesList,
  },
];
