import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers} from 'redux';
import loginReducer from '../redux/login/reducer';

const rootReducer = combineReducers(loginReducer);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
