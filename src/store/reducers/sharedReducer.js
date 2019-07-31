/**
 * Initial State
 */
const initialState = {
  loginLogin: 'testinput@mail.com',
  loginPassword: '',
  user: '',
};

/**
 * Types
 */
// je crée mes types d'actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';

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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
