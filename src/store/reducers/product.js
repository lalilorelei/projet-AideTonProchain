const initialState = {
  prods: [
    {
      tintin: 'oui',
    },
  ],
  products: [
    {
      _id: {
        $oid: '5d49a1c42b16280cfc317fac',
      },
      name: 'thé',
      price: 3,
      available: true,
      updated_at: {
        $date: '2019-08-06T15:50:28.805Z',
      },
      shopkeeper: {
        $oid: '5d4995862b16280cfc317f90',
      },
      __v: 0,
    },
    {
      _id: {
        $oid: '5d49a1e42b16280cfc317fad',
      },
      name: 'café',
      price: 2,
      available: true,
      updated_at: {
        $date: '2019-08-06T15:51:00.992Z',
      },
      shopkeeper: {
        $oid: '5d4995862b16280cfc317f90',
      },
      __v: 0,
    },
  ],
};

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

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

export const addProduct = (data, token) => ({
  type: ADD_PRODUCT,
  data,
  token,
});

export default product;
