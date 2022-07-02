const mongoose = require("mongoose");

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

const CoffeeModel = mongoose.model("coffee", CoffeeSchema);
module.exports = CoffeeModel;