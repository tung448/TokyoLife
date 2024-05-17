const express = require('express');
const router = express.Router();
const sitesController = require('../app/controllers/SitesController');



router.get('/home',sitesController.home);


module.exports = router;