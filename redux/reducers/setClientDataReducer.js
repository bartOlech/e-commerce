import * as constants from '../actions/constants';

const initialState = {
    modifySectionIsVisible: false,
    clientName: '',
    clientMotherName: '',
    clientFatherName: '',
    clientPlace: '',
    clientGrowth: '',
    clientWeight: ''
}

const setClientDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_CLIENT_NAME_TO_PRODUCT:
            return {
                ...state,
                clientName: action.payload.clientName
            }
        case constants.SET_MOTHER_NAME:
            return {
                ...state,
                clientMotherName: action.payload.data
            }
        case constants.SET_FATHER_NAME:
            return {
                ...state,
                clientFatherName: action.payload.data
            }
        case constants.SET_PLACE:
            return {
                ...state,
                clientPlace: action.payload.data
            }
        case constants.SET_GROWTH:
            return {
                ...state,
                clientGrowth: action.payload.data
            }
        case constants.SET_WEIGHT:
            return {
                ...state,
                clientWeight: action.payload.data
            }    
        case constants.SET_MODIFY_PRODUCT_VISIBLE:
            return {
                ...state,
                modifySectionIsVisible: action.payload.val
            }   
        default: 
            return {
                ...state
            }
    }
}

export default setClientDataReducer;