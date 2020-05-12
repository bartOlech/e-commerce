import * as constants from '../constants';

export const setMotherName = (data) => ({
    type: constants.SET_MOTHER_NAME,
    payload: {
        data
    }
})