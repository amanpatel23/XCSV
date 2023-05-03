const express = require('express');
const router = express.Router();

// getting home controller
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);

// getting subroutes for '/files'
router.use('/files', require('./files'));

module.exports = router; 