require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

// //Set up mongoose connection
// const mongoose = require('mongoose');
// const mongoDBUriKey = process.env.mongoAtlasUri;
// mongoose.connect(mongoDBUriKey, { useNewUrlParser: true , useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error'));
// db.once("open", () => console.log("Connected to DB!"));

//Routes
const dataparserRoute = require('./routes/dataparserRoute');

app.use(dataparserRoute);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});