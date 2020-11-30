import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authReducer from '../redux/auth/reducer';
import loginReducer from '../redux/login/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

export {store, persistor};
