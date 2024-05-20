

const users = require('../models/Model_Users');
class CartController{
    // GET /cart // user
     async index(req,res){
          try{
               const user = await users.findOne({user_name:'tungbeng'}).lean(); // convert to plain text
               console.log(user['cart_user']);
               res.render('cart',{user: user});
               //res.json(user)
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }
}
module.exports = new CartController();