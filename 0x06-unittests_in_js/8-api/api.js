const express = require('express');
const app = express();
const port = 7865;
const hostname = 'localhost'

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.listen(port, hostname, () => {
  console.log(`API available on ${hostname} ${port}`);
});

module.exports = app;