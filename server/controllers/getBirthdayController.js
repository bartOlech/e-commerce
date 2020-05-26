const mongoose = require('mongoose');
const BirthdayData = require('../models/birthdaySchema');

exports.getData = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    mongoose.connect('mongodb://bartgrj:W+B=dreamteams@51.210.97.140:27017/admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('MongoDB conected')).catch(err => console.log(err))
mongoose.Promise = global.Promise;
BirthdayData.find({
        type: 'getBirthdayData'
    }).then((data) => {
        res.send(data)
    })
}