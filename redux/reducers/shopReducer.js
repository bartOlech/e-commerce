import * as constants from '../actions/constants';

const initialState = {
    category: 'URODZINY'
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_SHOP_SECTION: 
            return {
                ...state,
                category: action.payload.category
            }
        default: 
            return {
                ...state
            }
    }
}

export default shopReducer;