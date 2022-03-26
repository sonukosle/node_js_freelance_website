const express = require('express');

const routes = express.Router();

routes.get('/',(req,res) => {

// res.send("This is message from routes");

res.render("index");

});

//second routes

routes.get('/gallary',(req,res) => {
    
    // res.send("Gallary");
    res.render("gallary");
});

module.exports = routes;
