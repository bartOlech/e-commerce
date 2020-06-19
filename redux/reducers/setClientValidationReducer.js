import * as constants from '../actions/constants';

const initialState = {
    modifySectionIsVisible: false,
    allIsValidate: true,
}

const setClientValidationReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_MODIFY_PRODUCT_VISIBLE:
            return {
                ...state,
                modifySectionIsVisible: action.payload.val
            }   
        case constants.SET_ALL_VALIDATE:
            return {
                ...state,
                allIsValidate: action.payload.val
            }  
        default: 
            return {
                ...state
            }
    }
}

export default setClientValidationReducer;