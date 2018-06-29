"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const recipeComponent = require("./Components/RecipeAppComp/recipeapp.component");
let app = express();
let orderList = [];
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
let recipeL = [];
let recipeItem = '';
app.param('store', function (req, next, value) {
    req.data = req.data || {}; 
    req.data.store = value;
    next();
});


app.get('/recipeTest', function (res) {
    res.send('{"test": This is a Test');
});

// Shows the recipe list
app.post('/recipeList', function (req, res) {
    res.header('body', req.body);
    recipeL.push(req.body);
    console.log(recipeL);
    res.send({Recipe: recipeL});
});

app.post('/getRecipe', function (req, res) {
    console.log('body', req.body);
});

//Start the server
app.listen(4200, function () {
    console.log("Server Start");
});