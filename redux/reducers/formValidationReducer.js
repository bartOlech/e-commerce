import * as constants from '../actions/constants';

const initialState = {
    street: '',
    number: '',
    city: '',
    code: '',
    email: '',
    message: '',
    name: '',
    phone: ''
}

const formValidationReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.STREET_VALIDATION: 
            return {
                ...state,
                street: action.payload.street
            }
        case constants.NUMBER_VALIDATION: 
            return {
                ...state,
                number: action.payload.number
            }
        case constants.CODE_VALIDATION: 
            return {
                ...state,
                code: action.payload.code
            }
        case constants.CITY_VALIDATION: 
            return {
                ...state,
                city: action.payload.city
            }
        case constants.EMAIL_VALIDATION: 
            return {
                ...state,
                email: action.payload.email
            }
        case constants.EXTRA_MESSAGE_VALIDATION: 
            return {
                ...state,
                message: action.payload.message
            }
        case constants.NAME_VALIDATION: 
            return {
                ...state,
                name: action.payload.name
            }
        case constants.PHONE_VALIDATION: 
            return {
                ...state,
                phone: action.payload.phone
            }
        default: 
            return {
                ...state
            }
    }
}

export default formValidationReducer;