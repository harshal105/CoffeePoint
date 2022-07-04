const express = require("express");
const router = express.Router();
const CoffeeModel = require("../models/Coffee");

router
    .route('/:typeOfCoffee')

    .get((req,res) => {
        CoffeeModel.findOne({name: req.params.typeOfCoffee}, (err, foundCoffee) => {
            if (foundCoffee){
                res.json(foundCoffee);
            }else if (err) {
                res.json (err);
            } else{
                res.json("Sorry no coffee was found under that name");
            }
        });
    })

    .put((req,res) => {
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
        });
    })

    .patch((req,res) => {
        CoffeeModel.updateOne({name: req.params.typeOfCoffee}, {$set: req.body}, 
            (err) => {
                if (!err){
                    res.send("Coffee successfully patched");
                }else{
                    res.send(err);
                }
        });
    })

    .delete((req,res) => {
        CoffeeModel.deleteOne({name: req.params.typeOfCoffee},
            (err) => {
                if (!err){
                    res.send("Coffee successfully deleted");
                }else{
                    res.send(err);
                }
        })
    })

module.exports = router;
