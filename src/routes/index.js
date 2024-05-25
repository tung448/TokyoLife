const sites = require('./sites');
const clothingFemale = require('./clothing_female');
const cart = require('./cart');
const checkOut = require('./checkOut');


function routes(app){
    // req client // res from server
    
    // clothing-female 
    app.use('/clothing-female',clothingFemale);
    
    // cart
    app.use('/cart',cart)


    // checkOut
    app.use('/check-out',checkOut);

    //home   
    app.use('/',sites);
}
module.exports = routes;
