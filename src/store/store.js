import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from './../reducers/authReducer';
import { uiReducer } from './../reducers/uiReducer';
import { moneyReducer } from './../reducers/moneyReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  money: moneyReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);
