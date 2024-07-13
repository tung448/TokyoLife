const express = require('express');
const handlebar = require('express-handlebars');
const path = require('path');
const dataBase = require('./config/db/index');
const cookieParser = require('cookie-parser')

const app = express();
const port = 8011;

const routes = require('./routes/index');

app.use(express.static(path.join(__dirname,'public'))); // static file

// // Middleware để phân tích cú pháp JSON từ yêu cầu
app.use(express.json());
// Middleware để phân tích cú pháp URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

dataBase.connect();


//temple engine
app.engine('hbs', handlebar.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');  
app.set('views', path.join(__dirname, 'resources/views')); // unstable directory of handlebars

console.log(path.join(__dirname, 'resources/views'));
// routes
routes(app);

app.listen(port,()=>console.log(`Server is running on http://localhost:${port}/login`));

