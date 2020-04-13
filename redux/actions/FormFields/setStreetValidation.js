import * as constants from '../constants';

export const setStreetValidation = (street) => ({
    type: constants.STREET_VALIDATION,
    payload: {
        street
    }
})