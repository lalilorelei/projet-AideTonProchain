import { combineReducers } from 'redux';

import sharedReducer from './sharedReducer';

const reducers = combineReducers({
  sharedReducer,
});

export default reducers;