import axios from 'axios';
import { CREATE_PRODUCTS, GET_PRODUCTS, recieveProducts } from 'store/reducers/product';

import { decodedToken } from 'utils';

const productMiddleware = store => next => action => {
  switch (action.type) {
    // case CREATE_PRODUCTS:
    //   const id = decodedToken(token).id;
    //   axios.post(`${process.env.URL}/product/${id}`, data, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    //   store.dispatch(recieveProducts());
    //   break;
    case GET_PRODUCTS:
      // axios.post('aider-son-prochain/api/connexion', data, {headers: {Authorization: `Bearer ${token}`}})
      store.dispatch(recieveProducts());
      break;
    default:
      next(action);
  }
};

export default productMiddleware;
