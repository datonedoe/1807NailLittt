const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('BACKEND SERVER TO BE IMPLEMENTED')
});

app.listen(PORT, () => console.log('Server running on port', PORT));
