import * as constants from '../constants';

export const addFrameToOrder = (bool) => ({
    type: constants.ADD_FRAME_TO_ORDER,
    payload: {
        bool
    }
})