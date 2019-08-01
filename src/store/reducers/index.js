import { combineReducers } from 'redux';

import beneficiary from './beneficiary';
import donor from './donor';
import shopkeeper from './shopkeeper';
import product from './product';
import donation from './donation';

const reducers = combineReducers({
  beneficiary,
  donor,
  shopkeeper,
  product,
  donation,
});

export default reducers;
