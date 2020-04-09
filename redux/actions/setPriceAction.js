import * as constants from './constants';

export const setPrice = (price) => ({
    type: constants.SET_PRICE,
    payload: {
        price
    }
});