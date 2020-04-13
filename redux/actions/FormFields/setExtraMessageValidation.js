import * as constants from '../constants';

export const setExtraMessageValidation = (message) => ({
    type: constants.EXTRA_MESSAGE_VALIDATION,
    payload: {
        message
    }
})