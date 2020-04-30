const mongoose = require('mongoose');
const BirthData = require('../models/birthSchema');

exports.getData = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    mongoose.connect(process.env.MONGODB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('MongoDB conected')).catch(err => console.log(err))
mongoose.Promise = global.Promise;
BirthData.find({
        type: 'getBirthData'
    }).then((data) => {
        res.send(data)
    })
}