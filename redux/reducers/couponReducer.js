import * as constants from '../actions/constants';

const initialState = {
    couponValue: ''
}

const couponReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_COUPON_VALUE:
            return {
                ...state,
                couponValue: action.payload.value
            }
        default :
            return {
                ...state
            }
    }
}

export default couponReducer;