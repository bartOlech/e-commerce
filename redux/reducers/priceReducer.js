import * as constants from '../actions/constants';

const initialState = {
    price: ''
}

const priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_PRICE:
            return {
                ...state,
                price: action.payload.price
            }
        default:
            return{...state}
    }
}

export default priceReducer;