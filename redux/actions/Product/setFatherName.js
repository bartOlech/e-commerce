import * as constants from '../constants';

export const setFatherName = (data) => ({
    type: constants.SET_FATHER_NAME,
    payload: {
        data
    }
})