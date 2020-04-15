import * as constants from '../constants';

export const setRegulationsValidation = (regulations) => ({
    type: constants.REGULATION_VALIDATION,
    payload: {
        regulations
    }
})