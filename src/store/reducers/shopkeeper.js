const initialState = {
  shopkeepers: [],
  shopkeeper: {},
};

export const RECIEVE_SHOPS = 'RECIEVE_SHOPS';
export const RECIEVE_SHOP = 'RECIEVE_SHOP';

const shopkeeper = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECIEVE_SHOPS:
      return {
        ...state,
        shopkeepers: action.data.shopkeepers,
      };
    case RECIEVE_SHOP:
      return {
        ...state,
        shopkeeper: action.data.shopkeeper,
      };
    default:
      return state;
  }
};

export const recieveShops = data => ({
  type: RECIEVE_SHOPS,
  data,
});

export const recieveShop = data => ({
  type: RECIEVE_SHOP,
  data,
});

export default shopkeeper;
