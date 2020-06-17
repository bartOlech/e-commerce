import * as constants from '../actions/constants';

const initialState = {
    price: 0,
    totalPrice: 0,
    couponIsActivated: false
}

const priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_PRICE:
            return {
                ...state,
                price: action.payload.price
            }
        case constants.SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload.price + state.totalPrice
            }
        case constants.SET_CLEAR_PRICE:
            return {
                ...state,
                totalPrice: 0
            }
        case constants.SET_COUPON:
            return {
                ...state,
                totalPrice: state.totalPrice * action.payload.coupon,
                couponIsActivated: true
            }
        case constants.REMOVE_FROM_PRICE:
            return {
                ...state,
                price: state.price - action.payload.val
            }
        case constants.ADD_TO_PRICE:
            return {
                ...state,
                price: +state.price + action.payload.val
            }
        default:
            return{...state}
    }
}

export default priceReducer;