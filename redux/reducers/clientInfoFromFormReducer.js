import * as constants from '../actions/constants';

const initialState = {
   validationArr: [],
}

const clientInfoFromFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_NEW_INFO:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case constants.SET_CLIENT_VALIDATION:
            return {
                ...state,
                validationArr: action.payload.arr,
            }
        default :
            return {
                ...state
            }
    }
}

export default clientInfoFromFormReducer;