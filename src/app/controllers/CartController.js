

const users = require('../models/Model_Users');

class CartController{
     async indexPost(req,res){
          try{
               const user = await users.findOne({user_name:'tungbeng'}).lean(); // convert to plain text
               res.render('checkOut',{user: user});
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }

    // GET /cart // user
     async indexGet(req,res){
          try{
               const user = await users.findOne({user_name:'tungbeng'}).lean(); // convert to plain text
               res.render('cart',{user: user});
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }
}
module.exports = new CartController();