const express = require('express');
const router = express.Router();
const CheckOutController = require('../app/controllers/CheckOutController');



router.post('/',CheckOutController.indexPost)
router.get('/',CheckOutController.indexGet);


module.exports = router;