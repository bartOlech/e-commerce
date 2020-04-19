import * as constants from '../actions/constants';

const initialState = {
    isVisible: false, 
}

const basketReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SHOW_BASKET:
            return {
                ...state,
                isVisible: action.payload.isVisible
            }
        default:
            return {
                ...state
            }
    }
}

export default basketReducer;