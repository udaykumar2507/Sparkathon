require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


const routes = require("./routes/HomeRoute")
const app = express();

app.use(express.json());
app.use(cors());

app.use("/",routes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        console.log("Connection Successfull for DB") 
        app.listen(process.env.PORT, () => {
            console.log("Connected to port successfully")
        })
    })
    .catch((err) => { console.log("Received an Error") })
module.exports = app;