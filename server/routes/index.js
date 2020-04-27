const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController');
const getBirthdayController = require('../controllers/getBirthdayController');

router.get('/', homeController.home)
router.get('/getBirthdayData', getBirthdayController.getData)

module.exports = router;