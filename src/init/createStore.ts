import { createStore, applyMiddleware, compose } from 'redux';

import { loggingMiddleware } from 'src/init/middleware/logging';
import { rootReducer } from 'src/store';

const middlewares = [
  loggingMiddleware,
];

const enhancers = [
  applyMiddleware(...middlewares),
];

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers),
);

export default store;
