import { INIT_REGISTER } from 'store/actionMiddleware';

const initialState = {
  currentUser: {},
  isRegistered: false,
};

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const CONFIRM_REGISTER = 'CONFIRM_REGISTER';

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.data,
      };
    case INIT_REGISTER:
      console.log('init register !');
      return {
        ...state,
        isRegistered: false,
      };
    case CONFIRM_REGISTER:
      return {
        ...state,
        isRegistered: true,
      };

    default:
      return state;
  }
};

export const recieveCurrentUser = data => ({
  type: RECIEVE_CURRENT_USER,
  data,
});

export const confirmRegister = () => ({
  type: CONFIRM_REGISTER,
});

export const initRegister = () => ({
  type: INIT_REGISTER,
});

export default user;
