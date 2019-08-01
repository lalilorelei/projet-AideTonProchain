const initialState = {
  products: [],
  shop: {},
};

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS';

const product = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
        shop: { ...action.shop },
      };
    default:
      return state;
  }
};

export const getProducts = id => ({
  type: GET_PRODUCTS,
  id,
});

export const recieveProducts = (products, shop) => ({
  type: RECIEVE_PRODUCTS,
  products,
  shop,
});

export default product;
