import * as constants from '../actions/constants';

const initialState = {
    id: '',
    name: '',
    image: '',
    images: [],
    description: '',
    shipment: '',
    additionalData: '',
    color: '',
    productWithFrame: false,
    initialPrice: '',
    frameColorsArr: [],
    clientDateIsRequired: false,
    clientNameIsRequired: false,
    clientWeightIsRequired: false,
    clientGrowthIsRequired: false,
    clientPlaceIsRequired: false,
    clientFatherNameIsRequired: false,
    clientMotherNameIsRequired: false,
}

const frameReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_FRAME_DETAILS:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
                images: action.payload.images,
                description: action.payload.description,
                shipment: action.payload.shipment,
                additionalData: action.payload.additionalData,
                color: action.payload.color,
                initialPrice: action.payload.initialPrice,
                frameColorsArr: action.payload.frameColorsArr,
                clientDateIsRequired: action.payload.clientDateIsRequired,
                clientNameIsRequired: action.payload.clientNameIsRequired,
                clientWeightIsRequired: action.payload.clientWeightIsRequired,
                clientGrowthIsRequired: action.payload.clientGrowthIsRequired,
                clientPlaceIsRequired: action.payload.clientPlaceIsRequired,
                clientFatherNameIsRequired: action.payload.clientFatherNameIsRequired,
                clientMotherNameIsRequired: action.payload.clientMotherNameIsRequired,
                productWithFrame: action.payload.productWithFrame
            }
        case constants.SET_FRAME_COLOR: 
            return {
                ...state,
                color: action.payload.color
            }
        case constants.ADD_FRAME_TO_ORDER: 
            return {
                ...state,
                productWithFrame: action.payload.bool
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default frameReducer;