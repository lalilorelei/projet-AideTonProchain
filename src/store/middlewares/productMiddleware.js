import { GET_PRODUCTS, recieveProducts } from 'store/reducers/product';

const productMiddleware = store => next => action => {
  switch (action.type) {
    case GET_PRODUCTS:
      // axios.post('aider-son-prochain/api/connexion', data, {headers: {Authorization: `Bearer ${token}`}})
      store.dispatch(recieveProducts());
      break;
    default:
      next(action);
  }
};

export default productMiddleware;
