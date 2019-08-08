import axios from 'axios';
import { recieveBeneficiariesSuggests } from 'store/reducers/donor';
import { SEARCH_BENEFICIARY } from 'store/actionMiddleware';

const donorMiddleware = store => next => action => {
  switch (action.type) {
    case SEARCH_BENEFICIARY:
      break;

    default:
      next(action);
  }
};

export default donorMiddleware;
