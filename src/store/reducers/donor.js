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
export const RECIEVE_BENEFICIARIES_SUGGESTS = 'RECIEVE_BENEFICIARIES_SUGGESTS';

const donor = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_BENEFICIARIES_SUGGESTS:
      console.log(action.data);
      return {
        ...state,
        beneficiariesSuggests: action.data,
      };
    default:
      return state;
  }
};

export const recieveBeneficiariesSuggests = data => ({
  type: RECIEVE_BENEFICIARIES_SUGGESTS,
  data,
});

export const fake = data => ({
  type: FAKE,
  data,
});

export default donor;
