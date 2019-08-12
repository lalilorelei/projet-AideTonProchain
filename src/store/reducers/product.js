const initialState = {
  products: [],
  shop: {},
  productAddedConfirmMessage: {},
};

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETED_PRODUCT = 'DELETED_PRODUCT';
export const CONFIRM_PRODUCT_ADDED = 'CONFIRM_PRODUCT_ADDED';

const product = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
        shop: { ...action.shop },
      };
    case DELETED_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product !== action.data),
      };
    case CONFIRM_PRODUCT_ADDED:
      return {
        ...state,
        productAddedConfirmMessage: {
          type: 'success',
          message: 'Nouveau produit ajouté !',
          link: {
            label: 'voir le profil',
            url: '/profil',
          },
        },
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

export const getDeletedProduct = data => ({
  type: DELETED_PRODUCT,
  data,
});

export const confirmProductAdded = () => ({
  type: CONFIRM_PRODUCT_ADDED,
});

export default product;
