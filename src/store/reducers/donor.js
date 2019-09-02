const initialState = {
  donors: ['tintin'],
  beneficiariesSuggests: [
    {
      name: 'Michel',
      id: 564684846545646,
    },
  ],
};

export const FAKE = 'FAKE';

const donor = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const fake = data => ({
  type: FAKE,
  data,
});

export default donor;
