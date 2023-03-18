const bodyParser = require("body-parser");

const parseData = async (req, res) => {
  res.status(200).json({"test": "hello world"})
}



