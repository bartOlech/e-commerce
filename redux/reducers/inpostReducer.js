import * as constants from '../actions/constants';

const initialState = {
    ipostVisible: false,
    lockerAddress: ''
}

const inpostReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_INPOST_VISIBLE:
            return {
                ...state,
                ipostVisible: !state.ipostVisible
            }
        case constants.SET_PARCEL_LOCKER:
            return {
                ...state,
                lockerAddress: action.payload.lockerAddress
            }
        default:
            return{...state}
    }
}

export default inpostReducer;