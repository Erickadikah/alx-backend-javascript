const express = require('express');
const app = express();
const port = 7865;
const hostname = 'localhost'

app.get('/', function (req, res) {
    res.send('Welcome to the payment system');
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Internal Server Error');
    
});

app.listen(port, hostname, () => {
  console.log(`API available on ${hostname} ${port}`);
});

module.exports = app;