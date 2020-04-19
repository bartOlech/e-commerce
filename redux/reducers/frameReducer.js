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
    initialPrice: '',
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
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default frameReducer;