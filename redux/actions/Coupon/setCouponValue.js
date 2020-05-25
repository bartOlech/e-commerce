import * as constants from '../constants';

export const setCouponValue = (value) => ({
    type: constants.SET_COUPON_VALUE,
    payload: {
        value
    }
})