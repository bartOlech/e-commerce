import * as constants from '../constants';

export const setModifyProductIsVisible = (val) => ({
    type: constants.SET_MODIFY_PRODUCT_VISIBLE,
    payload: {
        val
    }
})