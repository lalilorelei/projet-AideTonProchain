const initialState = {
  beneficiaries: [],
};

export const RECIEVE_BENEFICIARIES_SUGGESTS = 'RECIEVE_BENEFICIARIES_SUGGESTS';

const beneficiary = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_BENEFICIARIES_SUGGESTS:
      return {
        ...state,
        beneficiaries: action.data,
      };
    default:
      return state;
  }
};

export const recieveBeneficiariesSuggests = data => ({
  type: RECIEVE_BENEFICIARIES_SUGGESTS,
  data,
});

export default beneficiary;
