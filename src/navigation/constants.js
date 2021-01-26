import Home from 'app/pages/Home';
import Login from 'app/pages/Login';
import OwnerForm from 'app/pages/OwnerForm';
import OwnerList from 'app/pages/OwnerList';
import VehicleForm from 'app/pages/VehicleForm';
import VehiclesList from 'app/pages/VehiclesList';

export const PATHS = {
  VEHICLES: '/vehicles',
  HOME: '/',
  LOGIN: '/login',
  VEHICLE_FORM: '/formulario-vehiculo',
  VEHICLE_ID_FORM: '/formulario-vehiculo/:id',
  OWNER_ID_FORM: '/formulario-propietario/:id',
  OWNERS: '/owners',
  OWNER_FORM: '/formulario-propietario'
};

const MAIN_PUBLIC_PATH = PATHS.LOGIN;
const MAIN_PRIVATE_PATH = PATHS.HOME;

export const ROUTES = [
  {
    path: PATHS.VEHICLES,
    component: VehiclesList,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.LOGIN,
    component: Login,
    redirectTo: (user) => (user ? MAIN_PRIVATE_PATH : undefined),
  },
  {
    path: PATHS.HOME,
    component: Home,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
    exact: true,
  },
  {
    path: PATHS.VEHICLE_ID_FORM,
    component: VehicleForm,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.OWNER_ID_FORM,
    component: OwnerForm,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.VEHICLE_FORM,
    component: VehicleForm,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.OWNERS,
    component: OwnerList,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
  {
    path: PATHS.OWNER_FORM,
    component: OwnerForm,
    redirectTo: (user) => (user ? undefined : MAIN_PUBLIC_PATH),
  },
];
