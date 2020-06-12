const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes')
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(console.log('MongoDB conected')).catch(err => console.log(err))
mongoose.Promise = global.Promise;

app.set(path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', router);

module.exports = app;