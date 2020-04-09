import dateReducer from './dateReducer';
import sizeReducer from './sizeReducer';
import frameReducer from './frameReducer';
import priceReducer from './priceReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    date: dateReducer,
    size: sizeReducer,
    price: priceReducer,
    frameData: frameReducer,
});

export default rootReducer;