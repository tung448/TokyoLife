const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');



router.post('/', loginController.indexPost);
router.get('/',loginController.indexGet);

module.exports = router;