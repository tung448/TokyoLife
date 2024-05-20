const express = require('express');
const router = express.Router();
const CartController = require('../app/controllers/CartController');



router.get('/',CartController.index);


module.exports = router;