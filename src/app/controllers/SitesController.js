
const ModelUsers = require('../models/Model_Users');
const users = require('../models/Model_Users');
const sessions = require('./LoginController');


class SitesController{
    home(req, res) {     
        const _id =  sessions.Session[req.cookies.sessionId];
        if(!_id)
            return res.render('login');
        users.findOne(_id).then((user)=>{
            console.log("LOG IN");
            return res.render('home');
        })
        .catch(()=>{
            return res.render('login');
        });        
    } 
}

module.exports = new SitesController();