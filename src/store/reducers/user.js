const initialState = {
  currentUser: {
    user: {
      active: true,
      _id: '5d42d498e678ee5b540f30e4',
      firstname: 'gregory',
      lastname: 'shields',
      username: 'greg',
      email: 'testdonor@test.com',
      updated_at: '2019-08-01T12:01:28.297Z',
      tokens: [
        {
          _id: '5d440f858749f612809d5559',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDQyZDQ5OGU2NzhlZTViNTQwZjMwZTQiLCJyb2xlIjoiZG9ub3IiLCJpYXQiOjE1NjQ3NDE1MDksImV4cCI6MTU2NDgyNzkwOX0.YxcstY5QDIm-XhAjj-tjYNj7I9MQIXiQT22k-iKuc64',
        },
        {
          _id: '5d4456246a9859576c273dae',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDQyZDQ5OGU2NzhlZTViNTQwZjMwZTQiLCJyb2xlIjoiZG9ub3IiLCJpYXQiOjE1NjQ3NTk1ODgsImV4cCI6MTU2NTM2NDM4OH0.AikJ7lF0BC4GkQquNvFvVCQilc_6nSqS0UmhNtZ_j04',
        },
      ],
      created_at: '2019-08-01T12:01:28.329Z',
      __v: 6,
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDQyZDQ5OGU2NzhlZTViNTQwZjMwZTQiLCJyb2xlIjoiZG9ub3IiLCJpYXQiOjE1NjQ3NTk1ODgsImV4cCI6MTU2NTM2NDM4OH0.AikJ7lF0BC4GkQquNvFvVCQilc_6nSqS0UmhNtZ_j04',
  },
  addressError: false,
};

export const FAKE = 'FAKE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SEND_MANUAL_LOCATION = 'SEND_MANUAL_LOCATION';
export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION';
export const GET_LOCATION_ERROR_MESSAGE = 'GET_LOCATION_ERROR_MESSAGE';
export const ADDRESS_ERROR = 'ADDRESS_ERROR';

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LOCATION_ERROR_MESSAGE:
      return {
        ...state,
        getLocationErrorMessage: action.message,
      };
    case ADDRESS_ERROR:
      console.log('Reducer erreur adresse');
      return {
        ...state,
        addressError: action.bool,
      };
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          user: {
            ...state.currentUser.user,
            localisation: {
              ...state.currentUser.user.localisation,
              latitude: action.lat,
              longitude: action.long,
            },
          },
        },
      };
    default:
      return state;
  }
};

export const submitLogin = data => ({
  type: SUBMIT_LOGIN,
  data,
});

export const submitRegister = (data, role) => ({
  type: SUBMIT_REGISTER,
  data,
  role,
});

export const updateUserLocation = (lat, long) => ({
  type: UPDATE_USER_LOCATION,
  lat,
  long,
});

export const sendManualLocation = address => ({
  type: SEND_MANUAL_LOCATION,
  address,
});

export const getLocationErrorMessage = message => ({
  type: GET_LOCATION_ERROR_MESSAGE,
  message,
});

export const setAddressError = bool => ({
  type: ADDRESS_ERROR,
  bool,
});

export default user;
