import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import middleware from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(middleware),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;