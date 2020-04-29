import * as constants from '../actions/constants';

const initialState = {
    birthdayProducts: '',
    birthProducts: ''
}

const getDataFromDatabaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_BIRTHDAY_DATA:
            return {
                ...state,
                birthdayProducts: action.payload.data
            }
        case constants.GET_BIRTH_DATA:
            return {
                ...state,
                birthProducts: action.payload.data
            }
        default: 
            return {
                ...state
            }
    }
}

export default getDataFromDatabaseReducer