const express = require('express');
const app = express();
const port = 3000


//home
app.get('/home', (req,res)=>{
    return res.send('Hello word');
});
app.listen(port,()=>console.log('App listening at local host'));

