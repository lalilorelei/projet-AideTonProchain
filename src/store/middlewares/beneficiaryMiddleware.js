import axios from 'axios';
import {
  recieveBeneficiariesSuggests,
  recieveBeneficiaries,
  recieveBeneficiary,
} from 'store/reducers/beneficiary';
import { SEARCH_BENEFICIARY, GET_BENEFICIARIES, GET_BENEFICIARY } from 'store/actionMiddleware';

const beneficiaryMiddleware = store => next => action => {
  switch (action.type) {
    case GET_BENEFICIARIES:
      axios
        .get(`http://95.142.175.77:3000/api/${action.role}/beneficiaries`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          store.dispatch(recieveBeneficiaries(response.data, action.location, action.maxDist));
        })
        .catch(e => {
          console.log('Impossible de récupérer les bénéficiaires', e);
        });
      break;

    case GET_BENEFICIARY:
      axios
        .get(`http://95.142.175.77:3000/api/${action.role}/beneficiaries/${action.beneficiaryId}`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          store.dispatch(recieveBeneficiary(response.data));
        })
        .catch(e => {
          console.log('Impossible de récupérer le bénéficiaire', e);
        });
      break;
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
