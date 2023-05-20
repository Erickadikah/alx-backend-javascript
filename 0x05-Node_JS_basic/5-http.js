const http = require('http');
const fs = require('fs');
const readFileSync  = require('./2-read_file');
// const stdin = process.stdin

const hostname = '127.0.0.1';
const port = 1245;
const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    // const data = fs.readFileSync(database);
    // res.end(`This is the list of our students\n${data}`);
    res.end(`This is the list of our students\n ${readFileSync(database)}`);
  }
});
app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
