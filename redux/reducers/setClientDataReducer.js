import * as constants from '../actions/constants';

const initialState = {
    clientName: ''
}

const setClientDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_CLIENT_NAME_TO_PRODUCT:
            return {
                ...state,
                clientName: action.payload.clientName
            }
        default: 
            return {
                ...state
            }
    }
}

export default setClientDataReducer;