const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController');
const getProducts = require('../controllers/getProducts');

router.get('/', homeController.home)
router.get('/getProducts', getProducts.data)

module.exports = router;