const mongoose = require('mongoose');
const OrderData = require('../../models/orderSchema');

exports.setOrder = (req, res, next) =>{
     // MongoDB connection
    mongoose.connect(process.env.MONGODB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;

        
    res.header("Access-Control-Allow-Origin", "*");
    
    // get actual date
    const now = new Date();

    const godzina_pl = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    const data_pl = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`
  
    
    // MongoDB connection
    mongoose.connect(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    })
    .then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;

    const { street, number, code, city, email, name, phone, message, delivery, products } = req.body;

    const newOrder = new OrderData({
        produkt: products,
        imie_nazwisko: name,
        ulica: street,
        numer: number,
        kod_pocztowy: code,
        miasto: city,
        email,
        telefon: phone,
        dodatkowa_wiadomosc: message,
        dostawa: delivery,
        data: new Date(),
        data_pl,
        godzina_pl,
        wysłano: false,
        nr_zamownienia: ''
      });

    //   save to database
      newOrder.save().then((data) => {
        console.log('Data has been saved successfully')
      }).catch(err => console.log(err));

    }