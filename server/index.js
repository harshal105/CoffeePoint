const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

let password = process.env.PASSWORD;

mongoose.connect("mongodb+srv://coffeehub:" + password + "@cluster0.lfb4d.mongodb.net/?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("Server is Running");
})