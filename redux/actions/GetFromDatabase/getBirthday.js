import * as constants from '../constants';

export const getBirthday = (data) => ({
    type: constants.GET_BIRTHDAY_DATA,
    payload: {
        data
    }
})