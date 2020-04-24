import * as constants from '../constants';

export const setClientNameToProduct = (clientName) => ({
    type: constants.SET_CLIENT_NAME_TO_PRODUCT,
    payload: {
        clientName
    }
})