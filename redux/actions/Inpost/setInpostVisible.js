import * as constants from '../constants';

export const setInpostVisible = (bool) => ({
    type: constants.SET_INPOST_VISIBLE,
    payload: {
        bool
    }
})