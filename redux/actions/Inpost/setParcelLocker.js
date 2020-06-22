import * as constants from '../constants';

export const setParcelLocker = (lockerAddress) => ({
    type: constants.SET_PARCEL_LOCKER,
    payload: {
        lockerAddress
    }
})