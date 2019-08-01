const initialState = {
  shopkeepers: [
    {
      user: {
        localisation: {
          address: '',
          latitude: 0,
          longitude: 0,
        },
        _id: '5d3c60e6c1695050f020f22e',
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
        ],
        created_at: '2019-07-27T14:34:15.032Z',
        __v: 70,
        tokens: [
          {
            _id: '5d42ba274eb76c0b40a87711',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNjNjBlNmMxNjk1MDUwZjAyMGYyMmUiLCJyb2xlIjoic2hvcGtlZXBlciIsImlhdCI6MTU2NDY1NDExOSwiZXhwIjoxNTY0NzQwNTE5fQ.m96YNS51SuKHLHeJCpk2E2GOB4Buz-9IHkSnFwahrsY',
          },
        ],
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNjNjBlNmMxNjk1MDUwZjAyMGYyMmUiLCJyb2xlIjoic2hvcGtlZXBlciIsImlhdCI6MTU2NDY1NDExOSwiZXhwIjoxNTY0NzQwNTE5fQ.m96YNS51SuKHLHeJCpk2E2GOB4Buz-9IHkSnFwahrsY',
    },
  ],
};

export const FAKE = 'FAKE';

const shopkeeper = (state = initialState, action = {}) => {
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

export default shopkeeper;
