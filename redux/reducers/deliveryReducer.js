import * as constants from '../actions/constants';

const initialState = {
    delivery: '',
    price: ''
}

const deliveryReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_DELIVERY:
            return{
                ...state,
                delivery: action.payload.delivery,
                price: action.payload.price
            }
        default: 
            return {
                ...state
            }
    }
}

export default deliveryReducer;