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
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

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
