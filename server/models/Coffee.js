const mongoose = require("mongoose");

const CoffeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
})

const CoffeeModel = mongoose.model("coffee", CoffeeSchema);

module.exports = CoffeeModel;