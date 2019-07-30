/**
 * Initial State
 */
const initialState = {
  loginLogin: 'testinput@mail.com',
  loginPassword: '',
  user: {
    username: 'Tintin72',
    role: 'beneficiary', /* use 'beneficiary' or 'shopkeeper' or 'donor' */
  }
};

/**
 * Types
 */
// je crée mes types d'actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // je décris l'évolution de mon state selon les actions

    case SUBMIT_LOGIN:
    console.log("Tentative de connexion avec", action.credentials);
      return {
        ...state,
      };

    case CHANGE_INPUT_VALUE:
    const target = action.key;
      return {
          ...state,
          [target]: action.value,
      }
    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const submitLogin = credentials => ({
  type: SUBMIT_LOGIN,
});

export const changeInput = (key, value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  key,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;