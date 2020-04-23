import * as constants from '../constants';

export const setShopSection = (category) => ({
    type: constants.SET_SHOP_SECTION,
    payload: {
        category
    }
})