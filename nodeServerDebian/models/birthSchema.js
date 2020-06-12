const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const birthSchema = new Schema({
    productId: {
        type: String
    },
    name: {
        type: String
    },
    size: {
        type: String
    },
    price: {
        type: String
    },
    priceWithSize: {
        type: Object
    },
    image: {
        type: String
    },
    images: {
        type: Array
    },
    hoverImage: {
        type: String
    },
    color: {
        type: String
    },
    frameColors: {
        type: Array
    },
    description: {
        type: String
    },
    shipment: {
        type: String
    },
    additionalData: {
        type: Array
    },
    clientNameIsRequired: {
        type: Boolean
    },
    clientDateIsRequired: {
        type: Boolean
    },
})
const BirthSchema = mongoose.model('birth', birthSchema, 'birth')
module.exports = BirthSchema;