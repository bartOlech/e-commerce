import * as constants from '../constants';

export const setGrowth = (data) => ({
    type: constants.SET_GROWTH,
    payload: {
        data
    }
})