import * as constants from '../actions/constants';

const initialState = {
    products: [
       
    ]
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload.object]
            }
        case constants.REMOVE_PRODUCT:
            return {
                ...state, products: state.products.filter( el => el.id !== action.payload.id )
            }
        case constants.INCREASE_QUANTITY:
            return {
                products: action.payload.object
            }
        default:
            return{...state}
    }
}

export default productsReducer;