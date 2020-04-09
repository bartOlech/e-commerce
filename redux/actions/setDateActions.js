import * as constants from './constants';

export const setDate = (day, month, year) => ({
    type: constants.SELECT_DATE,
    payload: {
        day,
        month,
        year
    }
});