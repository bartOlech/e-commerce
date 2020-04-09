import * as constants from '../actions/constants';

const initialState = {
    size: ''
}

const sizeReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SELECT_SIZE:
            return {
                ...state,
                size: action.payload.size
            }
        default:
            return{...state}
    }
}

export default sizeReducer;