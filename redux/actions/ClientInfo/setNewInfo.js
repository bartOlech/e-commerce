import * as constants from '../constants';

export const setNewInfo = (name, value) => ({
    type: constants.SET_NEW_INFO,
    payload: {
        name,
        value
    }
});