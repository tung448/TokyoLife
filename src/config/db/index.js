
const mongoose = require('mongoose');
class connectToDataBase{
    async connect(){
        const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/tokyo_life_dev';
        await mongoose.connect(mongoURL)
        .then(() => console.log('Connected DataBase!'))
        .catch(() => console.log('Error connected database!'));
    }
}

module.exports =  new connectToDataBase();