import * as constants from '../constants';

export const getBirth = (data) => ({
    type: constants.GET_BIRTH_DATA,
    payload: {
        data
    }
})