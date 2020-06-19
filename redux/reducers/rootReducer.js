import sizeReducer from './sizeReducer';
import frameReducer from './frameReducer';
import priceReducer from './priceReducer';
import deliveryReducer from './deliveryReducer';
import formValidationReducer from './formValidationReducer';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import shopReducer from './shopReducer';
import setClientValidationReducer from './setClientValidationReducer';
import getDataFromDatabaseReducer from './getDataFromDatabaseReducer';
import couponReducer from './couponReducer';
import clientInfoFromFormReducer from './clientInfoFromFormReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    size: sizeReducer,
    price: priceReducer,
    frameData: frameReducer,
    delivery: deliveryReducer,
    validation: formValidationReducer,
    basket: basketReducer,
    product: productsReducer,
    shop: shopReducer,
    clientValidation: setClientValidationReducer,
    products: getDataFromDatabaseReducer,
    coupon: couponReducer,
    clientInfo: clientInfoFromFormReducer
});

export default rootReducer;