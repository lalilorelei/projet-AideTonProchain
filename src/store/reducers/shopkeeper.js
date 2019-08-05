const initialState = {
  shopkeepers: [
    {
      user: {
        localisation: {
          address: '19 rue du test React',
          latitude: 48.864622,
          longitude: 2.362588,
        },
        _id: '5d3c60e6c1695050f020f22e',
        firstname: 'Philippe',
        lastname: 'Dumont',
        username: 'pdumont',
        shopkeeper_name: "Tom's shop' in Paris",
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
    {
      user: {
        localisation: {
          address: '17 rue du test React',
          latitude: 52.4672,
          longitude: 13.371637,
        },
        _id: '5d3c60e6c1695050f020f2k2e',
        firstname: 'Thomas',
        lastname: 'Dubois',
        username: 'tdubois',
        shopkeeper_name: "Tom's shop' in Berlin",
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
