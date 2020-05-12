import * as constants from '../constants';

export const setWeight = (data) => ({
    type: constants.SET_WEIGHT,
    payload: {
        data
    }
})