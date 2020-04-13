import * as constants from '../constants';

export const setCodeValidation = (code) => ({
    type: constants.CODE_VALIDATION,
    payload: {
        code
    }
})