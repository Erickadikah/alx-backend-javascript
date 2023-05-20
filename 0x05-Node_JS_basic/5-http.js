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
  } else {
    if (req.url === '/students') {
    //message = readFileSync(database);
    res.write('This is the list of our students\n');
    res.statusCode = 200;
    //readFileSync(database);
    //send message to client && data to client
    res.end(readFileSync(database));
    } else {
      res.statusCode = 404;
      res.end('This is not a valid URL');
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
