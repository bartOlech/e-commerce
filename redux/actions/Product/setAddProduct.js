import * as constants from '../constants';

export const setAddProduct = (object, isInStore) => ({
    type: constants.ADD_PRODUCT,
    payload: {
        object,
        isInStore
    }
})