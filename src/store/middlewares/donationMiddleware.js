import axios from 'axios';
import { confirmDonation } from 'store/reducers/donation';
import { SEND_DONATION } from 'store/actionMiddleware';

const shopkeeperMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_DONATION:
      console.log(action.data, action.token);
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
