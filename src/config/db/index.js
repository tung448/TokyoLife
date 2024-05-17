
const mongoose = require('mongoose');
class connectToDataBase{
    async connect(){
        await mongoose.connect('mongodb://localhost:27017/tokyo_life_dev')
        .then(() => console.log('Connected DataBase!'));
    }
}


module.exports =  new connectToDataBase();