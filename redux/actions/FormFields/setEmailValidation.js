import * as constants from '../constants';

export const setEmailValidation = (email) => ({
    type: constants.EMAIL_VALIDATION,
    payload: {
        email
    }
})