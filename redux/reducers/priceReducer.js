import * as constants from '../actions/constants';

const initialState = {
    price: '',
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
        default:
            return{...state}
    }
}

export default priceReducer;