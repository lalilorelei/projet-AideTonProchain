import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers/index';
import logMiddleware from './middlewares/logMiddleware';
import productMiddleware from './middlewares/productMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(logMiddleware, productMiddleware));

const store = createStore(reducer, enhancers);

export default store;
