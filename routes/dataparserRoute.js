const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


// parse data text
app.post('/api/parseData', async (req, res) => {
  console.log(req.body)
  res.status(200).json({"test": "hello world"})
})

module.exports = app;