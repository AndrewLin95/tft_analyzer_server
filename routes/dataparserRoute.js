const express = require('express');
const bodyParser = require("body-parser");
const { createWorker } = require ('tesseract.js');
const app = express();
app.use(bodyParser.json());

// parse data text
app.post('/api/parseData', async (req, res) => {
  const worker = await createWorker();

  console.log(req.body.imagePayloadBase64)
  const imagePayload = req.body.imagePayloadBase64;
  const base64Data = imagePayload.replace(/^data:image\/png;base64,/, '');
  let image = Buffer.from(base64Data, 'base64');

  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await (await worker).setParameters({
    tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/>'
  })
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  await worker.terminate();

  res.status(200).json({"test": text})


  // tesseract.recognize(image, 'eng', {logger: m => console.log(m)}
  //   ).then(({data: {text}}) => {
  //     console.log(text);

  //     res.status(200).json({"test": "hello world"})
  //   })


})

module.exports = app; 