import * as constants from '../constants';

export const setTotalPrice = (price) => ({
    type: constants.SET_TOTAL_PRICE,
    payload: {
        price
    }
})