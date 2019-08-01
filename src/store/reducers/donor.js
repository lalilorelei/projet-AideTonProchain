const initialState = {
  donors: [
    {
      user: {
        _id: '5d3f33d75a65a96038b31e0a',
        firstname: 'gregory',
        lastname: 'shields',
        username: 'greg',
        email: 'testdonor@test.com',
        updated_at: '2019-07-29T17:58:47.901Z',
        tokens: [
          {
            _id: '5d413bcf5cb6ae40e48bf504',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNmMzNkNzVhNjVhOTYwMzhiMzFlMGEiLCJyb2xlIjoiZG9ub3IiLCJpYXQiOjE1NjQ1NTYyMzksImV4cCI6MTU2NDY0MjYzOX0.HnKAWdvVJ_0bJyjnEMA5-OwqSNxCnsLO0CH_XWZFCLw',
          },
          {
            _id: '5d42b49e0af97646d4dd7aec',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNmMzNkNzVhNjVhOTYwMzhiMzFlMGEiLCJyb2xlIjoiZG9ub3IiLCJpYXQiOjE1NjQ2NTI3MDIsImV4cCI6MTU2NDczOTEwMn0.6Y72x6qaZMoWP6cpVh8sxv_3NaZ6Ca_QPv8mexL4wwI',
          },
        ],
        created_at: '2019-07-29T17:58:47.938Z',
        __v: 17,
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNmMzNkNzVhNjVhOTYwMzhiMzFlMGEiLCJyb2xlIjoiZG9ub3IiLCJpYXQiOjE1NjQ2NTI3MDIsImV4cCI6MTU2NDczOTEwMn0.6Y72x6qaZMoWP6cpVh8sxv_3NaZ6Ca_QPv8mexL4wwI',
    },
  ],
};

export const FAKE = 'FAKE';

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

export const fake = data => ({
  type: FAKE,
  data,
});

export default donor;
