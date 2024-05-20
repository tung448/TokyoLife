const sites = require('./sites');
const clothingFemale = require('./clothing_female');
const cart = require('./cart');

function routes(app){
    // req client // res from server
    
    // clothing-female 
    app.use('/clothing-female',clothingFemale);
    
    app.use('/cart',cart)

    //home   
    app.use('/',sites);
}
module.exports = routes;
