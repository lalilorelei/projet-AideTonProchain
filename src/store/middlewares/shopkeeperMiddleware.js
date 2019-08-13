import axios from 'axios';
import { recieveShops, recieveShop } from 'store/reducers/shopkeeper';
import { GET_SHOPS, GET_SHOP } from 'store/actionMiddleware';

const shopkeeperMiddleware = store => next => action => {
  switch (action.type) {
    case GET_SHOPS:
      axios
        .get(`http://95.142.175.77:3000/api/${action.role}/shopkeepers`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          store.dispatch(recieveShops(response.data, action.location, action.maxDist));
        })
        .catch(e => {
          console.log('Impossible de récupérer les shops', e);
        });
      break;

    case GET_SHOP:
      axios
        .get(`http://95.142.175.77:3000/api/${action.role}/shopkeepers/${action.shopkeeperId}`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          store.dispatch(recieveShop(response.data));
        })
        .catch(e => {
          console.log('Impossible de récupérer le shop', e);
        });
      break;
    default:
      next(action);
  }
};

export default shopkeeperMiddleware;
