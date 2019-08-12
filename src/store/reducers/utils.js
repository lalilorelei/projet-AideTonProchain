const initialState = {
  alert: {},
};

export const ALERT = 'ALERT';

const utils = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALERT:
      return {
        ...state,
        alert: action.alert,
      };
    default:
      return state;
  }
};

export const alert = alert => ({
  type: ALERT,
  alert,
});

export default utils;
