const mongoose = require('mongoose');
const productShema = require('../models/products');

exports.data = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    mongoose.connect(process.env.MONGODB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('MongoDB conected')).catch(err => console.log(err))
mongoose.Promise = global.Promise;
    productShema.find({
        type: 'question'
    }).then((userName) => {
        res.send(userName)
    })
}