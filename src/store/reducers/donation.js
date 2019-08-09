const initialState = {
  donations: [],
  donationConfirmMessage: {},
};

export const CONFIRM_DONATION = 'CONFIRM_DONATION';
export const RECIEVE_DONATIONS = 'RECIEVE_DONATIONS';

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
    case RECIEVE_DONATIONS:
      return {
        ...state,
        donations: action.data,
      };
    default:
      return state;
  }
};

export const confirmDonation = () => ({
  type: CONFIRM_DONATION,
});

export const recieveDonations = donations => ({
  type: RECIEVE_DONATIONS,
  data: donations,
});

export default donation;
