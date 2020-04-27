import * as constants from '../actions/constants';

const initialState = {
    birthdayProducts: ''
}

const getDataFromDatabaseReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_BIRTHDAY_DATA:
            return {
                ...state,
                birthdayProducts: action.payload.data
            }
        default: 
            return {
                ...state
            }
    }
}

export default getDataFromDatabaseReducer