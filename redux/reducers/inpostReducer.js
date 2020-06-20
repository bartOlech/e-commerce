import * as constants from '../actions/constants';

const initialState = {
    ipostVisible: false
}

const inpostReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_INPOST_VISIBLE:
            return {
                ...state,
                ipostVisible: !state.ipostVisible
            }
        default:
            return{...state}
    }
}

export default inpostReducer;