const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const password = process.env.PASSWORD;
const coffeesRoute = require("./routes/Coffees");
const typeOfCoffeeRoute = require("./routes/TypeOfCoffee");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/coffees", coffeesRoute);
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });     
app.use("/coffees", typeOfCoffeeRoute);

mongoose.connect("mongodb+srv://coffeehub:" + password + "@cluster0.lfb4d.mongodb.net/coffeehub?retryWrites=true&w=majority");
//console.log(mongoose.connection.readyState);

app.listen(3001, () => {
    console.log("Server is Running");
})