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
    clientInfo: '',
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
                initialPrice: action.payload.initialPrice,
                clientInfo: action.payload.clientInfo,
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