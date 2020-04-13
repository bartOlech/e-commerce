import * as constants from '../constants';

export const setNameValidation = (name) => ({
    type: constants.NAME_VALIDATION,
    payload: {
        name
    }
})