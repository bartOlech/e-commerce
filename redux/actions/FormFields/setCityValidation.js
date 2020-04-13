import * as constants from '../constants';

export const setCityValidation = (city) => ({
    type: constants.CITY_VALIDATION,
    payload: {
        city
    }
})