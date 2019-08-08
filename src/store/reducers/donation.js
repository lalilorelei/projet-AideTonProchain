const initialState = {
  donations: [],
  donationConfirmMessage: {},
};

export const CONFIRM_DONATION = 'CONFIRM_DONATION';

const donation = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONFIRM_DONATION:
      return {
        ...state,
        donationConfirmMessage: {
          type: 'success',
          message: 'Donation validée, merci beaucoup !',
        },
      };
    default:
      return state;
  }
};

export const confirmDonation = () => ({
  type: CONFIRM_DONATION,
});

export default donation;
