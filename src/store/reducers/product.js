const initialState = {
  products: [
    {
      _id: '5d415f6ed3631001bca8ec69',
      name: 'café',
      price: 2,
      available: true,
      category: 'alimentaire',
      updated_at: '2019-07-31T09:29:18.797Z',
      shopkeeper: '5d3c60e6c1695050f020f22e',
      __v: 0,
    },
  ],
};

export const FAKE = 'FAKE';

const product = (state = initialState, action = {}) => {
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

export default product;
