const express = require('express');
const router = express.Router();
const CheckOutController = require('../app/controllers/CheckOutController');



router.get('/',CheckOutController.index);


module.exports = router;