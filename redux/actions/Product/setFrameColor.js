import * as constants from '../constants';

export const setFrameColor = (color) => ({
    type: constants.SET_FRAME_COLOR,
    payload: {
       color
    }
})