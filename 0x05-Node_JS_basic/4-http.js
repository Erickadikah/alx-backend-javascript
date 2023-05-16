const http = require('http');

//localhost
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;