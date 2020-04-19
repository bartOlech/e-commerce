import * as constatns from '../constants';

export const setQuantity = (object) => ({
    type: constatns.INCREASE_QUANTITY,
    payload: {
        object
    }
})