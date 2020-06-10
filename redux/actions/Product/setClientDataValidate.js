import * as constants from '../constants';

export const setClientDataValidate = (val) => ({
    type: constants.SET_CLIENT_DATA_VALIDATE,
    payload: {
        val
    }
})