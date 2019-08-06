const initialState = {
  currentUser: {},
  message: {
    success: '',
    error: '',
  },
};

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const REGISTER_MESSAGE = 'REGISTER_MESSAGE';

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_CURRENT_USER:
      console.log({
        ...state,
        currentUser: action.data,
      });
      return {
        ...state,
        currentUser: action.data,
      };
    case REGISTER_MESSAGE:
      return {
        ...state,
        message: action.data,
      };
    default:
      return state;
  }
};

export const recieveCurrentUser = data => ({
  type: RECIEVE_CURRENT_USER,
  data,
});

export const registerMessage = data => ({
  type: REGISTER_MESSAGE,
  data,
});

export default user;
