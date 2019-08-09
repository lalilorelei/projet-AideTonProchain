import axios from 'axios';
import { confirmDonation, recieveDonations } from 'store/reducers/donation';
import { SEND_DONATION, GET_DONATIONS } from 'store/actionMiddleware';

const shopkeeperMiddleware = store => next => action => {
  switch (action.type) {
    case GET_DONATIONS:
      axios
        .get(`http://95.142.175.77:3000/api/${action.role}/donations/`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          store.dispatch(recieveDonations(response.data.donations));
        })
        .catch(e => {
          console.log('Impossible de récupérer les donations', e);
        });
      break;
    case SEND_DONATION:
      axios
        .post('http://95.142.175.77:3000/api/donor/donation/', action.data, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          console.log(response);
          store.dispatch(confirmDonation());
        })
        .catch(e => {
          console.log("Impossible d'envoyer la donation", e);
        });
      break;
    default:
      next(action);
  }
};

export default shopkeeperMiddleware;
