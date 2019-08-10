// log middleware
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const INIT_REGISTER = 'INIT_REGISTER';
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

export const initRegister = () => ({
  type: INIT_REGISTER,
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

export const getShops = (role, token, location, maxDist) => ({
  type: GET_SHOPS,
  role,
  token,
  location,
  maxDist,
});

export const getShop = (role, token, shopkeeperId) => ({
  type: GET_SHOP,
  role,
  token,
  shopkeeperId,
});

// beneficiary middleware

export const GET_BENEFICIARIES = 'GET_BENEFICIARIES';
export const GET_BENEFICIARY = 'GET_BENEFICIARY';

export const getBeneficiaries = (role, token, location, maxDist) => {
  return {
    type: GET_BENEFICIARIES,
    role,
    token,
    location,
    maxDist,
  };
};

export const getBeneficiary = (role, token, beneficiaryId) => ({
  type: GET_BENEFICIARY,
  role,
  token,
  beneficiaryId,
});

// donor search beneficiary middleware

export const SEARCH_BENEFICIARY = 'SEARCH_BENEFICIARY';

export const searchBeneficiary = (textValue, token) => ({
  type: SEARCH_BENEFICIARY,
  textValue,
  token,
});

// donation middleware

export const SEND_DONATION = 'SEND_DONATION';

export const sendDonation = (data, token) => ({
  type: SEND_DONATION,
  data,
  token,
});

export const GET_DONATIONS = 'GET_DONATIONS';
export const getDonations = (role, token) => ({
  type: GET_DONATIONS,
  role,
  token,
});

export const VALIDATE_DONATION = 'VALIDATE_DONATION';
export const validateDonation = (role, token, donationId) => ({
  type: VALIDATE_DONATION,
  role,
  token,
  donationId,
});
