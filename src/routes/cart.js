const express = require('express');
const router = express.Router();
const CartController = require('../app/controllers/CartController');


router.post('/',CartController.indexPost);
router.get('/',CartController.indexGet);


module.exports = router;