const express = require("express");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8000;

app.use(cors())

const tea = {

    'oolong': {
        'type': 'black',
        'origin':'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flaveor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin':'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': false,
        'flaveor': 'delicious' },
    'unknown': {
        'type': 'unknown',
        'origin':'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flaveor': 'unknown' }

};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const teaName  = req.params.name.toLowerCase();
  if(tea[teaName]){
      res.json(tea[teaName])
  }else {
      res.json(tea['unknown'])
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! Betta Go Catch It!`);
});
