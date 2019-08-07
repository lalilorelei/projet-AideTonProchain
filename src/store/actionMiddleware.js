export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const DECONNEXION = 'DECONNEXION';
export const ADD_PRODUCT = 'ADD_PRODUCT';

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

export const createProduct = (data, token) => ({
  type: ADD_PRODUCT,
  data,
  token,
});
