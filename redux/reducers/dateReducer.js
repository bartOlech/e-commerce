import * as constants from '../actions/constants';

const initialState = {
    selectedDate: 'Bart'
  };

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_DATE:
            return {...state, selectedDate: action.payload.date}
        default:
            return {...state};
    }
};

export default dateReducer;