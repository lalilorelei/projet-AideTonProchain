// import { createStore, applyMiddleware, compose } from 'redux';

// import reducer from './reducers/index';
// import logMiddleware from './middlewares/logMiddleware';
// import productMiddleware from './middlewares/productMiddleware';
// import locationMiddleware from './middlewares/locationMiddleware';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(logMiddleware, productMiddleware, locationMiddleware),
// );

// const store = createStore(reducer, enhancers);

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers/index';
import logMiddleware from './middlewares/logMiddleware';
import productMiddleware from './middlewares/productMiddleware';
import locationMiddleware from './middlewares/locationMiddleware';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, productMiddleware, locationMiddleware),
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, enhancers);

if (module.hot) {
  module.hot.accept('store/reducers/index', () => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require('store/reducers/index').default;
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  });
}

export const persistor = persistStore(store);

export default store;
