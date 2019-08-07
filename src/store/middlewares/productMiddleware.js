import axios from 'axios';
import { ADD_PRODUCT, GET_PRODUCTS, recieveProducts } from 'store/reducers/product';

import { decodedToken } from 'utils';

const productMiddleware = store => next => action => {
  switch (action.type) {
    case GET_PRODUCTS:
      // axios.post('aider-son-prochain/api/connexion', data, {headers: {Authorization: `Bearer ${token}`}})
      store.dispatch(recieveProducts());
      break;
    case ADD_PRODUCT:
      console.log('ajout', action.data, action.token);
      const id = decodedToken(action.token).id;
      axios
        .post(`http://95.142.175.77:3000/api/product/`, action.data, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
      break;
    default:
      next(action);
  }
};

export default productMiddleware;
