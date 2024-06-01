
const ModelUsers = require('../models/Model_Users');
const users = require('../models/Model_Users');
const sessions = require('./LoginController');


function checkUserCookie(req, res){
    const _id =  sessions.Session[req.cookies.sessionId];
    if(!_id){
        console.log("back");
        return res.redirect('/login');
    }
    users.findOne(_id).then((user)=>{
        console.log("LOG IN");
        return res.render('home');
    })
    .catch(()=>{
        console.log("back");
        return res.render('login');
    });        
}

class SitesController{
    homePost(req, res) {     
        checkUserCookie(req, res);
    } 
    homeGet(req, res) {     
        checkUserCookie(req, res);
    } 
}

module.exports = new SitesController();