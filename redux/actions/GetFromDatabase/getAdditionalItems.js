import * as constants from '../constants';

export const getAddtionalItems = (data) => ({
    type: constants.GET_ADDITIONAL_ITEMS,
    payload: {
        data
    }
})