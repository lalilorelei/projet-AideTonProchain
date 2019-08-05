const initialState = {
  beneficiaries: [
    {
      user: {
        email: '',
        localisation: {
          address: '',
          latitude: 48.709907,
          longitude: 6.225622,
        },
        _id: '5d3f0f54c73f995908ac01e2',
        firstname: 'ludo',
        lastname: 'd',
        username: 'ludo',
        updated_at: '2019-07-29T15:23:00.938Z',
        tokens: [
          {
            _id: '5d42b9c64eb76c0b40a87710',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNmMGY1NGM3M2Y5OTU5MDhhYzAxZTIiLCJyb2xlIjoiYmVuZWZpY2lhcnkiLCJpYXQiOjE1NjQ2NTQwMjIsImV4cCI6MTU2NDc0MDQyMn0.J0FolwTIpE78_yKjkQA-p1EB837P9SIHufDvg3hW7GM',
          },
        ],
        created_at: '2019-07-29T15:23:00.971Z',
        __v: 112,
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNmMGY1NGM3M2Y5OTU5MDhhYzAxZTIiLCJyb2xlIjoiYmVuZWZpY2lhcnkiLCJpYXQiOjE1NjQ2NTQwMjIsImV4cCI6MTU2NDc0MDQyMn0.J0FolwTIpE78_yKjkQA-p1EB837P9SIHufDvg3hW7GM',
    },
  ],
};

export const FAKE = 'FAKE';

const beneficiary = (state = initialState, action = {}) => {
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

export default beneficiary;
