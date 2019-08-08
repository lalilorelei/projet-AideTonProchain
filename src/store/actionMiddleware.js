// log middleware
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const DECONNEXION = 'DECONNEXION';

export const submitLogin = data => ({
  type: SUBMIT_LOGIN,
  data,
});

export const submitRegister = (data, role) => ({
  type: SUBMIT_REGISTER,
  data,
  role,
});

export const deconnexion = (token, role) => ({
  type: DECONNEXION,
  token,
  role,
});

// product middleware
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT ';

export const createProduct = (data, token) => ({
  type: ADD_PRODUCT,
  data,
  token,
});

export const getProducts = shopkeeperId => ({
  type: GET_PRODUCTS,
  shopkeeperId,
});

export const deleteProduct = (token, productId) => ({
  type: DELETE_PRODUCT,
  token,
  productId,
});

// shopkeeper middleware

export const GET_SHOPS = 'GET_SHOPS';
export const GET_SHOP = 'GET_SHOP';

export const getShops = (role, token) => ({
  type: GET_SHOPS,
  role,
  token,
});

export const getShop = (role, token, shopkeeperId) => ({
  type: GET_SHOP,
  role,
  token,
  shopkeeperId,
});

// donor search beneficiary middleware

export const SEARCH_BENEFICIARY = 'SEARCH_BENEFICIARY';

export const searchBeneficiary = textValue => ({
  type: SEARCH_BENEFICIARY,
  textValue,
});
