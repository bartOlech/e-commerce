import * as constants from '../actions/constants';

const initialState = {
   
}

const clientInfoFromFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_NEW_INFO:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        default :
            return {
                ...state
            }
    }
}

export default clientInfoFromFormReducer;