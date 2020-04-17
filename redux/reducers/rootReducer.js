import dateReducer from './dateReducer';
import sizeReducer from './sizeReducer';
import frameReducer from './frameReducer';
import priceReducer from './priceReducer';
import deliveryReducer from './deliveryReducer';
import formValidationReducer from './formValidationReducer';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    date: dateReducer,
    size: sizeReducer,
    price: priceReducer,
    frameData: frameReducer,
    delivery: deliveryReducer,
    validation: formValidationReducer,
    basket: basketReducer,
    product: productsReducer
});

export default rootReducer;