const initialState = {
  donations: [
    {
      products: ['5d400205b4e65906b49a5357'],
      _id: '5d42bb0e4eb76c0b40a87713',
      donor: '5d3f33d75a65a96038b31e0a',
      beneficiary: '5d3f0f54c73f995908ac01e2',
      shopkeeper: '5d3c60e6c1695050f020f22e',
      created_at: '2019-08-01T10:12:30.500Z',
      __v: 0,
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
