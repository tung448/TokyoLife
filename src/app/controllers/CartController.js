

const users = require('../models/Model_Users');
class CartController{
    // GET /cart // user
     async index(req,res){
          try{
               const user = await users.findOne({user_name:'tungbeng'}).lean(); // convert to plain text
<<<<<<< HEAD
               //console.log(user['cart_user']);
=======
               console.log(user['cart_user']);
>>>>>>> c09eec4dd463949b4725bcadf5faa83e6c5e65cf
               res.render('cart',{user: user});
               //res.json(user)
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }
}
module.exports = new CartController();