import * as constants from './constants';

export const setFrameDetails = (
    id, 
    name, 
    image, 
    images, 
    description, 
    shipment, 
    additionalData, 
    initialPrice, 
    clientInfo,
    clientDateIsRequired, 
    clientNameIsRequired,
    clientWeightIsRequired,
    clientGrowthIsRequired,
    clientPlaceIsRequired,
    clientFatherNameIsRequired,
    clientMotherNameIsRequired,
    productWithFrame
    ) => ({
    type: constants.SET_FRAME_DETAILS,
    payload: {
        id,
        name,
        image,
        images,
        description,
        shipment,
        additionalData,
        initialPrice,
        clientInfo,
        clientDateIsRequired,
        clientNameIsRequired,
        clientWeightIsRequired,
        clientGrowthIsRequired,
        clientPlaceIsRequired,
        clientFatherNameIsRequired,
        clientMotherNameIsRequired,
        productWithFrame
    }
})