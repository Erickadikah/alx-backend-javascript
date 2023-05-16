const express = require('express')
const app = express()
// localhost
const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;