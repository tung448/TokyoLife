
const helper = require('../helper/Helper');
const users = require('../models/Model_Users');


class LoginController{
     constructor() {
          this.Session = {};
          this.indexPost = this.indexPost.bind(this);
          this.indexGet = this.indexGet.bind(this);
      }
     // POST 
     async indexPost(req,res){
          const user = await users.findOne({user_name : req.body.username}); // field data
          if(user){
               if(user.pass_word ===  req.body.pw){
                    const sessionId = Date.now().toString();
                    this.Session[sessionId] ={
                         _id : user._id,
                    };
                    res.setHeader('Set-Cookie', `sessionId=${sessionId}; Max-Age=3600; HttpOnly`);

                    return res.redirect('/home');
               }
          }
          return res.render('login');
     }
     // GET
     indexGet(req,res){
          return res.render('login');
     }
}
module.exports = new LoginController();