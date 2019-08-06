const initialState = {
  donations: [
    {
      donation: {
        products: [
          {
            _id: '5d49a1c42b16280cfc317fac',
            name: 'thé',
            price: 3,
            available: true,
            updated_at: '2019-08-06T15:50:28.805Z',
            shopkeeper: '5d4995862b16280cfc317f90',
            __v: 0,
          },
          {
            _id: '5d49a1e42b16280cfc317fad',
            name: 'café',
            price: 2,
            available: true,
            updated_at: '2019-08-04T15:51:00.992Z',
            shopkeeper: '5d4995862b16280cfc317f90',
            __v: 0,
          },
        ],
        _id: '5d49a61f2b16280cfc317fb8',
        use_at: '2019-08-05T15:51:00.992Z',
        donor: {
          _id: '5d4293a7bb396f07a1aae6ee',
          username: 'greg',
        },
        beneficiary: '5d48548b625a0204a20548dd',
        shopkeeper: {
          localisation: {
            lat: '48.8781816',
            lon: '2.3956631',
            address: '18 rue des Lilas 75019 Paris',
          },
          _id: '5d4995862b16280cfc317f90',
          shopkeeper_name: 'Ashely Prince',
        },
        created_at: '2019-08-06T16:09:03.171Z',
        __v: 0,
      },
      beneficiary: {
        id: '5d48548b625a0204a20548dd',
        username: 'ggglyke-beneficiary',
      },
    },
  ],
};

export const FAKE = 'FAKE';

const donation = (state = initialState, action = {}) => {
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

export default donation;
