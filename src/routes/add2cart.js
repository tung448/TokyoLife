const express = require('express');
const router = express.Router();
const add2cartController = require('../app/controllers/add2cartController');



router.post('/',add2cartController.index);


module.exports = router;