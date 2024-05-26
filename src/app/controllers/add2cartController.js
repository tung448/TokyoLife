
const Item = require('../models/SchemaItem');
const users = require('../models/Model_Users');

// add item to user' cart
class add2cartController{
    // POST 
    async index(req,res){
          Item.name = req.body.name;
          Item.description = req.body.description;
          Item.imageURL = req.body.imageURL;
          Item.cost = req.body.cost;
          Item.adminPost = req.body.adminPost;
          try{
               const user = await users.findOne({user_name:'tungbeng'}).lean(); // convert to plain text
               res.render('cart',{user: user});
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }
}
module.exports = new add2cartController();