import axios from 'axios';
import { ADD_PRODUCT, GET_PRODUCTS, recieveProducts, getDeletedProduct } from 'store/reducers/product';

import { DELETE_PRODUCT, getProducts, EDIT_PRODUCT } from 'store/actionMiddleware';

import { decodedToken } from 'utils';

const productMiddleware = store => next => action => {
  switch (action.type) {
    case EDIT_PRODUCT:
      console.log(action);
      axios
        .patch(`http://95.142.175.77:3000/api/product/update/${action.productId}`, action.data, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          console.log('produit mis à jour');
          //store.dispatch(recieveProducts(response.data.products, response.data.shopkeeper));
        })
        .catch(e => {
          console.log(e);
        });
      break;
    case GET_PRODUCTS:
      axios
        .get(`http://95.142.175.77:3000/api/product/${action.shopkeeperId}`)
        .then(response => {
          store.dispatch(recieveProducts(response.data.products, response.data.shopkeeper));
        })
        .catch(e => {
          console.log(e);
        });
      break;
    case ADD_PRODUCT:
      console.log('ajout', action.data, action.token);
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
    case DELETE_PRODUCT:
      axios
        .delete(`http://95.142.175.77:3000/api/product/delete/${action.productId}`, {
          headers: { Authorization: `Bearer ${action.token}` },
        })
        .then(response => {
          const id = decodedToken(action.token).id;
          store.dispatch(getProducts(id));
        })
        .catch(e => {
          console.log('Impossible de supprimer le produit', e);
        });
      break;
    default:
      next(action);
  }
};

export default productMiddleware;
