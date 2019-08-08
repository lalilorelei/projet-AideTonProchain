import axios from 'axios';
import { recieveBeneficiariesSuggests } from 'store/reducers/beneficiary';
import { SEARCH_BENEFICIARY } from 'store/actionMiddleware';

const beneficiaryMiddleware = store => next => action => {
  switch (action.type) {
    case SEARCH_BENEFICIARY:
      axios
        .get(`http://95.142.175.77:3000/api/donor/search-beneficiary/?q=${action.textValue}`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          store.dispatch(recieveBeneficiariesSuggests(response.data.result));
        })
        .catch(e => {
          console.log(e);
        });
      break;

    default:
      next(action);
  }
};

export default beneficiaryMiddleware;
