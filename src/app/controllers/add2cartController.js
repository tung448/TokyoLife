
const helper = require('../helper/Helper');
const users = require('../models/Model_Users');

// add item to user' cart
class add2cartController{
    // POST 
     async index(req,res){
          const newItemData = {
               name: req.body.name,
               description: req.body.description,
               imageURL: req.body.imageURL,
               cost: helper.extracNumber(req.body.cost),
               adminPost: req.body.adminPost,
          };
          try{
               const user = await users.findOne({ user_name:'tungbeng' });
               // Kiểm tra xem trong cart_user đã có item với newItemData.name chưa
               const itemExists = user.cart_user.
               some(item => item.name === newItemData.name);
               if (!itemExists) {
                    users.updateOne({user_name:'tungbeng'},
                    { $push: { cart_user: newItemData }})
                    .then(()=>{
                         res.redirect('/cart');
                    })
                    .catch((err)=>{
                         console.log(err);
                    });
               }
               else{
                    res.redirect('/cart');
               }
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }
}
module.exports = new add2cartController();