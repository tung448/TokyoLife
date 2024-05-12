const express = require('express');
const handlebar = require('express-handlebars');
const path = require('path');



const app = express();
const port = 3000

app.use(express.static(path.join(__dirname,'public'))); // static file



//temple engine
app.engine('hbs', handlebar.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');  
app.set('views', path.join(__dirname, 'resources/views')); // unstable directory of handlebars

console.log(path.join(__dirname, 'resources/views'));

//home
app.get('/', (req,res)=>{ // req client // res from server
    res.render('home'); // render home.handlebars
});

// clothing-female 
app.get('/clothing-female', (req,res)=>{ // req client // res from server
    res.render('clothing-female'); // render home.handlebars
});


app.listen(port,()=>console.log('App listening at local host'));

