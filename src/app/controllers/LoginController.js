
const helper = require('../helper/Helper');
const users = require('../models/Model_Users');


class LoginController{
    // POST 
     async indexPost(req,res){
          const user = await users.findOne({user_name : req.body.username});
          if(user){
               if(user.pass_word ===  req.body.pw){
                    res.redirect('home');
               }
          }
          res.render('login');
     }
     // GET
     indexGet(req,res){
          res.render('login');
     }
}
module.exports = new LoginController();