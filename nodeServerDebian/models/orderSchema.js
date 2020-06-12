const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    produkt: {
        type: Array
    },
    imie_nazwisko: {
        type: String
    },
    ulica: {
        type: String
    },
    numer: {
        type: String
    },
    kod_pocztowy: {
        type: String
    },
    miasto: {
        type: String
    },
    email: {
        type: String
    },
    telefon: {
        type: String
    },
    dodatkowa_wiadomosc: {
        type: String
    },
    dostawa: {
        type: String
    },
    data: {
        type: String
    },
    data_pl: {
        type: String
    },
    godzina_pl: {
        type: String
    },
    wysłano: {
        type: Boolean
    },
    nr_zamownienia: {
        type: String
    }
    
})
const OrderData = mongoose.model('Orders', orderSchema, 'Orders')
module.exports = OrderData;