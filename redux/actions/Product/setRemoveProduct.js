import * as constatns from '../constants';

export const setRemoveProduct = (id) => ({
    type: constatns.REMOVE_PRODUCT,
    payload: {
        id
    }
})