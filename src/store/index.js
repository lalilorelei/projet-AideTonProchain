import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers/index';
import logMiddleware from './middlewares/logMiddleware';
import productMiddleware from './middlewares/productMiddleware';
import shopkeeperMiddleware from './middlewares/shopkeeperMiddleware';
import donationMiddleware from './middlewares/donationMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, productMiddleware, donationMiddleware, shopkeeperMiddleware),
);

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, enhancers);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

// import reducer from './reducers/index';
// import logMiddleware from './middlewares/logMiddleware';
// import productMiddleware from './middlewares/productMiddleware';
// import locationMiddleware from './middlewares/locationMiddleware';

// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler: autoMergeLevel1,
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(logMiddleware, productMiddleware, locationMiddleware),
// );

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(persistedReducer, enhancers);

// if (module.hot) {
//   module.hot.accept('store/reducers/index', () => {
//     // This fetch the new state of the above reducers.
//     const nextRootReducer = require('store/reducers/index').default;
//     store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
//   });
// }

// export const persistor = persistStore(store);

// export default store;
