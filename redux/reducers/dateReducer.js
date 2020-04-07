import * as constants from '../actions/constants';

const initialState = {
    day: '',
    month: '',
    year: ''
  };

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_DATE:
            return {
                ...state,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year
            }
        default:
            return {...state};
    }
};

export default dateReducer;