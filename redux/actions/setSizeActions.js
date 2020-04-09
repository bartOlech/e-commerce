import * as constants from './constants';

export const setSize = (size) => ({
    type: constants.SELECT_SIZE,
    payload: {
        size
    }
});