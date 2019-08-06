const initialState = {
  currentUser: {
    user: {
      firstname: 'Suki',
      lastname: 'Mason',
      email: 'videx@mailinator.net',
      localisation: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
      active: true,
      _id: '5d48548b625a0204a20548dd',
      username: 'ggglyke-beneficiary',
      updated_at: '2019-08-05T16:08:43.017Z',
      created_at: '2019-08-05T16:08:43.094Z',
      __v: 8,
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDQ4NTQ4YjYyNWEwMjA0YTIwNTQ4ZGQiLCJyb2xlIjoiYmVuZWZpY2lhcnkiLCJpYXQiOjE1NjUwODYxNzQsImV4cCI6MTU2NTY5MDk3NH0.kW9QdBPu_RNyVyYqsizFZr5w2vYP18DdGe6dPgTlMsQ',
  },
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
