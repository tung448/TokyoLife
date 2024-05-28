
const sites = require('./sites');
const clothingFemale = require('./clothing_female');
const cart = require('./cart');
const checkOut = require('./checkOut');
const add2cart = require('./add2cart');
const login = require('./login');

function routes(app){

    // login - out [POST]
    app.use('/login',login);
    
    // clothing-female 
    app.use('/clothing-female',clothingFemale);
    
    // cart
    app.use('/cart',cart)

    // POST
    app.use('/add-to-cart',add2cart);

    // checkOut
    app.use('/check-out',checkOut);

    //home   
    app.use('/',sites);
}
module.exports = routes;
