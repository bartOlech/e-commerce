import * as constants from '../constants';

export const setCoupon = (coupon) => ({
    type: constants.SET_COUPON,
    payload: {
        coupon
    }
})