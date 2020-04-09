import * as constants from './constants';

export const setFrameDetails = (id, name, image, images, description, shipment, additionalData, color, price) => ({
    type: constants.SET_FRAME_DETAILS,
    payload: {
        id,
        name,
        image,
        images,
        description,
        shipment,
        additionalData,
        color,
        price
    }
})