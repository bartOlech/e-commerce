import * as constants from '../constants';

export const setClientValidation = (arr) => ({
    type: constants.SET_CLIENT_VALIDATION,
    payload: {
        arr,
    }
})

