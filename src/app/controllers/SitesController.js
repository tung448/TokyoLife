const modelItem = require('../models/Model_Items');

class SitesController{
    home(req, res,next) {
        res.render('home');
    } 
}

module.exports = new SitesController();