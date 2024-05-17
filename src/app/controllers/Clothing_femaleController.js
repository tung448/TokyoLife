
const modelItem = require('../models/Model_Items');
const modelItemCircle = require('../models/Model_Items_Circle');

class Clothing_femaleController{
    // GET /clothing_female 
    // convert to plain text
    async index(req,res){
       try{
            const items = await modelItem.find({}).lean();
            const itemsCircle = await modelItemCircle.find({}).lean();

            res.render('clothingFemale', { items, itemsCircle });
       }
       catch(err){
            res.status(500).json({ error: 'ERROR' });
       }
    }
}
module.exports = new Clothing_femaleController();