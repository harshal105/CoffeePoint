const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const password = process.env.PASSWORD;
const CoffeeModel = require("./models/Coffee");

app.use(bodyParser.urlencoded({extended:true}));



mongoose.connect("mongodb+srv://coffeehub:" + password + "@cluster0.lfb4d.mongodb.net/coffeehub?retryWrites=true&w=majority");
//console.log(mongoose.connection.readyState);


app.get("/coffees", (req,res) => {
    CoffeeModel.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.post("/coffees", async (req,res) => {
    
    const newCoffee = new CoffeeModel({
        name: req.body.name,
        country: req.body.country,
        date: req.body.date,
        picture: req.body.picture,
        howToMake: req.body.howToMake,
        infoVideo: req.body.infoVideo
    });

    await newCoffee.save();

    res.json("Successfully Added");
})

app.delete("/coffees", (req,res) =>{
    CoffeeModel.deleteMany({}, (err) => {
        if (!err){
            res.send("All Coffees Successfully Deleted!")
        }else{
            res.send(err)
        }
    });
});

app.get("/coffees/:typeOfCoffee", (req,res) => {
    CoffeeModel.findOne({name: req.params.typeOfCoffee}, (err, foundCoffee) => {
        if (foundCoffee){
            res.json(foundCoffee);
        }else if (err) {
            res.json (err);
        } else{
            res.json("Sorry no coffee was found under that name");
        }
    })
})

app.put("/coffees/:typeOfCoffee", (req,res) => {
    CoffeeModel.replaceOne({name: req.params.typeOfCoffee}, {
        name: req.body.name,
        country: req.body.country,
        date: req.body.date,
        picture: req.body.picture,
        howToMake: req.body.howToMake,
        infoVideo: req.body.infoVideo
        },
        (err) => {
            if (!err){
                res.send("Coffee successfully changed");
            }else{
                res.send(err);
            }
    })
})

app.patch("/coffees/:typeOfCoffee", (req,res) => {
    CoffeeModel.updateOne({name: req.params.typeOfCoffee}, {$set: req.body}, 
        (err) => {
            if (!err){
                res.send("Coffee successfully patched");
            }else{
                res.send(err);
            }
    })
})

app.delete("/coffees/:typeOfCoffee", (req,res) => {
    CoffeeModel.deleteOne({name: req.params.typeOfCoffee},
        (err) => {
            if (!err){
                res.send("Coffee successfully deleted");
            }else{
                res.send(err);
            }
    })
})



app.listen(3001, () => {
    console.log("Server is Running");
})