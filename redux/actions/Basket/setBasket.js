import * as constants from '../constants';

export const setBasket = (isVisible) => ({
    type: constants.SHOW_BASKET,
    payload: {
        isVisible
    }
})