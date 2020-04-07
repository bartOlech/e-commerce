import dateReducer from './dateReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    date: dateReducer
});

export default rootReducer;