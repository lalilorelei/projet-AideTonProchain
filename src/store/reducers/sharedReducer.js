/**
 * Initial State
 */
const initialState = {
  loginLogin: 'testinput@mail.com',
  loginPassword: '',
  /*user: {
    name: 'Patrick',
    username: 'Patrick72',
    role: 'beneficiary',
  },*/
};

/**
 * Types
 */
// je crée mes types d'actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const SUBMIT_PRODUCT_SELECTOR = 'SUBMIT_PRODUCT_SELECTOR';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // je décris l'évolution de mon state selon les actions

    case SUBMIT_LOGIN:
      console.log('Tentative de connexion avec', action.credentials);
      return {
        ...state,
      };
    case SUBMIT_REGISTER:
      console.log("Tentative d'enregistrement avec", action.credentials);
      return {
        ...state,
      };
    case SUBMIT_PRODUCT_SELECTOR:
      console.log('produits choisis :', action.data);

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const submitLogin = data => ({
  type: SUBMIT_LOGIN,
  data,
});

export const submitRegister = (data, role) => ({
  type: SUBMIT_REGISTER,
  data,
  role,
});

export const submitContact = data => ({
  type: SUBMIT_CONTACT,
  data,
});

export const submitShopProductsSelector = data => ({
  type: SUBMIT_PRODUCT_SELECTOR,
  data,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
