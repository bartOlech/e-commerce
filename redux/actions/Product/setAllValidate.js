import * as constants from '../constants';

export const setAllValidate = (val) => ({
    type: constants.SET_ALL_VALIDATE,
    payload: {
        val
    }
})