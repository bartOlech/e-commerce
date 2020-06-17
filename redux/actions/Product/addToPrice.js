import * as constants from '../constants';

export const addToPrice = (val) => ({
    type: constants.ADD_TO_PRICE,
    payload: {
        val
    }
})