import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers/index';
import middleware from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(middleware));

const store = createStore(reducer, enhancers);

console.log(store);

export default store;
