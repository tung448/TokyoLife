const express = require('express');
const router = express.Router();
const clothing_femaleController = require('../app/controllers/Clothing_femaleController');



router.get('/',clothing_femaleController.index);


module.exports = router;