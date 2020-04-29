const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController');
const getBirthdayController = require('../controllers/getBirthdayController');
const getBirthController = require('../controllers/getBirthController');

router.get('/', homeController.home)
router.get('/getBirthdayData', getBirthdayController.getData)
router.get('/getBirthData', getBirthController.getData)

module.exports = router;