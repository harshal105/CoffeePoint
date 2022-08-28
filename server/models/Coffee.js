const mongoose = require("mongoose");

//Coffee schema to store information on the different coffees
const CoffeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    date: {
        type: Number
    },
    picture: {
        type: String
    },
    howToMake: {
        type: String
    },
    infoVideo: {
        type: String
    }

})

//Create the model for the schema *** coffee will become plural in mongo db ****
const CoffeeModel = mongoose.model("coffee", CoffeeSchema);

//export the model to be used outside of this file
module.exports = CoffeeModel;