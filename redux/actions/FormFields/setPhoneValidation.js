import * as constants from '../constants';

export const setPhoneValidation = (phone) => ({
    type: constants.PHONE_VALIDATION,
    payload: {
        phone
    }
})