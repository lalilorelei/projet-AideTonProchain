import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers/index';
import middleware from './reducers/middlewares/middleware';
import productMiddleware from './reducers/middlewares/productMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(middleware, productMiddleware));

const store = createStore(reducer, enhancers);

export default store;
