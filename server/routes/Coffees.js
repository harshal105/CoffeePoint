const express = require("express");
const router = express.Router();
const CoffeeModel = require("../models/Coffee");

router
    //main route for operations pertaining to all coffees
    .route("/")

    .get((req,res) => {
        CoffeeModel.find({}, (err,result) => {
            if(err){
                res.json(err);
            }else{
                res.json(result);
            }
        });
    })

    .post(async (req,res) => {
        
        console.log(req.body);
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

    .delete((req,res) =>{
        CoffeeModel.deleteMany({}, (err) => {
            if (!err){
                res.send("All Coffees Successfully Deleted!")
            }else{
                res.send(err)
            }
        });
    });

module.exports = router;