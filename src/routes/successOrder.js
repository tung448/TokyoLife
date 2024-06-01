const express = require('express');
const router = express.Router();
const successOrder = require('../app/controllers/SuccessOrderController');


router.post('/',successOrder.indexPost);
router.get('/',successOrder.indexGet);


module.exports = router;