const initialState = {
  beneficiaries: [],
  beneficiary: {},
};

export const RECIEVE_BENEFICIARIES_SUGGESTS = 'RECIEVE_BENEFICIARIES_SUGGESTS';
export const RECIEVE_BENEFICIARIES = 'RECIEVE_BENEFICIARIES';
export const RECIEVE_BENEFICIARY = 'RECIEVE_BENEFICIARY';

const beneficiary = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_BENEFICIARIES:
      return {
        ...state,
        beneficiaries: action.data.beneficiaries,
      };
    case RECIEVE_BENEFICIARY:
      return {
        ...state,
        beneficiary: action.data.beneficiary,
      };
    case RECIEVE_BENEFICIARIES_SUGGESTS:
      return {
        ...state,
        beneficiaries: action.data,
      };
    default:
      return state;
  }
};

export const recieveBeneficiaries = data => ({
  type: RECIEVE_BENEFICIARIES,
  data,
});

export const recieveBeneficiary = data => ({
  type: RECIEVE_BENEFICIARY,
  data,
});

export const recieveBeneficiariesSuggests = data => ({
  type: RECIEVE_BENEFICIARIES_SUGGESTS,
  data,
});

export default beneficiary;
