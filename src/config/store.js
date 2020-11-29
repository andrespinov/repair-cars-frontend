import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import loginReducer from '../redux/login/reducer';
import authReducer from '../redux/auth/reducer';
import vehicleReducer from '../redux/vehicle/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  vehicleReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

export {store, persistor};
