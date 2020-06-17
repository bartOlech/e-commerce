import * as constants from '../constants';

export const removeFromPrice = (val) => ({
    type: constants.REMOVE_FROM_PRICE,
    payload: {
        val
    }
})