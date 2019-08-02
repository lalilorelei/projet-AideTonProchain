const initialState = {
  currentUser: {
    user: {
      localisation: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
      _id: '5d3c60e6c1695050f020f22e',
      donnations: [],
      firstname: 'thomas',
      lastname: 'e',
      username: 'thomas',
      shopkeeper_name: 'café du coin',
      email: 'testshopkeeper@test.com',
      updated_at: '2019-07-27T14:34:14.934Z',
      products: [
        {
          _id: '5d400205b4e65906b49a5357',
          name: 'café',
          price: 2,
          available: true,
          category: 'alimentaire',
        },
        {
          _id: '5d414b981dca5b3990a44b4d',
        },
        {
          _id: '5d414bda1dca5b3990a44b4f',
        },
        {
          _id: '5d415401120de5440c4e7370',
        },
        {
          _id: '5d41545bfdf55e15cc5083a0',
        },
        {
          _id: '5d415535709d9720105f9eb2',
        },
      ],
      created_at: '2019-07-27T14:34:15.032Z',
      __v: 71,
      tokens: [
        {
          _id: '5d42ba274eb76c0b40a87711',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNjNjBlNmMxNjk1MDUwZjAyMGYyMmUiLCJyb2xlIjoic2hvcGtlZXBlciIsImlhdCI6MTU2NDY1NDExOSwiZXhwIjoxNTY0NzQwNTE5fQ.m96YNS51SuKHLHeJCpk2E2GOB4Buz-9IHkSnFwahrsY',
        },
        {
          _id: '5d43ec2648c42d40cc327dee',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNjNjBlNmMxNjk1MDUwZjAyMGYyMmUiLCJyb2xlIjoic2hvcGtlZXBlciIsImlhdCI6MTU2NDczMjQ1NCwiZXhwIjoxNTY0ODE4ODU0fQ.rr9nlgb7Smbo7fQzDP3Ac4MSdD1UAfLkHpCmwSsJW7E',
        },
      ],
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNjNjBlNmMxNjk1MDUwZjAyMGYyMmUiLCJyb2xlIjoic2hvcGtlZXBlciIsImlhdCI6MTU2NDczMjQ1NCwiZXhwIjoxNTY0ODE4ODU0fQ.rr9nlgb7Smbo7fQzDP3Ac4MSdD1UAfLkHpCmwSsJW7E',
  },
};

export const FAKE = 'FAKE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';

const donor = (state = initialState, action = {}) => {
  switch (action.type) {
    case FAKE:
      return {
        ...state,
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

export default donor;
