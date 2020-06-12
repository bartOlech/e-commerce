const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController');
const getBirthdayController = require('../controllers/getBirthdayController');
const getBirthController = require('../controllers/getBirthController');
const chatBotController = require('../controllers/chatbotController');
const setOrderController = require('../controllers/Orders/setOrderController');

router.get('/', homeController.home)
router.get('/getBirthdayData', getBirthdayController.getData)
router.get('/getBirthData', getBirthController.getData)
router.post('/newMessage', chatBotController.GetMessage);
router.post('/setOrder', setOrderController.setOrder);

module.exports = router;