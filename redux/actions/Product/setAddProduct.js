import * as constants from '../constants';

export const setAddProduct = (object) => ({
    type: constants.ADD_PRODUCT,
    payload: {
        object
    }
})