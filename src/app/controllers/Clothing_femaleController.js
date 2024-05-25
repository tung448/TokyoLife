
const modelItem = require('../models/Model_Items');
const modelItemCircle = require('../models/Model_Items_Circle');
class Clothing_femaleController{
    // GET /clothing_female 
     async index(req,res){
          try{
               const items = await modelItem.find({}).lean(); // convert to plain text
               const itemsCircle = await modelItemCircle.find({}).lean();

               res.render('clothingFemale', { items, itemsCircle });
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }
    }
    //when buy an item
    //GET /female-clothing/:slug

     async buyitem(req,res){
          try{
               const item = await modelItem.findOne({slug : req.params.slug}).lean();
               console.log(item);
               res.render('buyitem',{item});
          }
          catch(err){
               res.status(500).json({ error: 'ERROR' });
          }              
    }
}
module.exports = new Clothing_femaleController();