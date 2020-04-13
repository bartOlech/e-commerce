import * as constants from '../constants';

export const setNumberValidation = (number) => ({
    type: constants.NUMBER_VALIDATION,
    payload: {
        number
    }
})