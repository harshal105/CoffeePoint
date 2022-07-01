const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const password = process.env.PASSWORD;
const CoffeeModel = require("./models/Coffee");

mongoose.connect("mongodb+srv://coffeehub:" + password + "@cluster0.lfb4d.mongodb.net/coffeehub?retryWrites=true&w=majority");
//console.log(mongoose.connection.readyState);


app.get("/getCoffee", (req,res) => {
    CoffeeModel.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


app.listen(3001, () => {
    console.log("Server is Running");
})