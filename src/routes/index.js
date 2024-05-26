const express = require('express');
const sites = require('./sites');
const clothingFemale = require('./clothing_female');
const cart = require('./cart');
const checkOut = require('./checkOut');
const add2cart = require('./add2cart');

function routes(app){
    // Middleware để phân tích cú pháp JSON từ yêu cầu
    app.use(express.json());

    // Middleware để phân tích cú pháp URL-encoded payloads
    app.use(express.urlencoded({ extended: true }));

    // clothing-female 
    app.use('/clothing-female',clothingFemale);
    
    // cart
    app.use('/cart',cart)

    app.use('/add-to-cart',add2cart);

    // checkOut
    app.use('/check-out',checkOut);

    //home   
    app.use('/',sites);
}
module.exports = routes;
