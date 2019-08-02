const initialState = {
  donors: [
    {
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
