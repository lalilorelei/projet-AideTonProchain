import axios from 'axios';
import { recieveDonations, confirmValidatedTransaction } from 'store/reducers/donation';
import { confirmDonation } from 'store/reducers/shopkeeper';
import { SEND_DONATION, GET_DONATIONS, VALIDATE_DONATION } from 'store/actionMiddleware';

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
          store.dispatch(confirmDonation());
        })
        .catch(e => {
          console.log("Impossible d'envoyer la donation", e);
        });
      break;
    case VALIDATE_DONATION:
      console.log('trying to validate');
      axios
        .patch(
          `http://95.142.175.77:3000/api/${action.role}/donation-used/${action.donationId}`,
          action.data,
          {
            headers: { Authorization: `Bearer ${action.token}` },
          },
        )
        .then(response => {
          //store.dispatch(confirmValidatedTransaction());
          console.log('transation validée');
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
