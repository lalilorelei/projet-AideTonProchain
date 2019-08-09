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
        location: action.location,
        maxDist: action.maxDist,
      };
    case RECIEVE_BENEFICIARY:
      return {
        ...state,
        beneficiary: action.data.beneficiary,
        location: action.location,
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

export const recieveBeneficiaries = (data, location, maxDist) => ({
  type: RECIEVE_BENEFICIARIES,
  data,
  location,
  maxDist,
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
