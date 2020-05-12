import * as constants from '../constants';

export const setPlace = (data) => ({
    type: constants.SET_PLACE,
    payload: {
        data
    }
})