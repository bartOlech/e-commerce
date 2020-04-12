import * as constants from './constants';

export const setDeliveryMethod = (delivery, price) => ({
    type: constants.SET_DELIVERY,
    payload: {
        delivery, 
        price
    }
})