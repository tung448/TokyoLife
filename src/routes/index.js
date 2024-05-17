const sites = require('./sites');
const clothingFemale = require('./clothing_female');


function routes(app){
    // req client // res from server
    
    // clothing-female 
    app.use('/clothing-female',clothingFemale);
    
    //home   
    app.use('/',sites);
}
module.exports = routes;
