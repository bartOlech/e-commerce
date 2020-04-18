import * as constatns from '../constants';

export const setIncreaseQuantity = (object) => ({
    type: constatns.INCREASE_QUANTITY,
    payload: {
        object
    }
})