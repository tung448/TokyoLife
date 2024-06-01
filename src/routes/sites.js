const express = require('express');
const router = express.Router();
const sitesController = require('../app/controllers/SitesController');


router.post('/home',sitesController.homePost);
router.get('/home',sitesController.homeGet);


module.exports = router;