const http = require('http');
// const fs = require('fs');
const countStudents = require('./3-read_file_async');
// const { count } = require('console');
// const stdin = process.stdin


// const database = require('./database.csv');
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async(req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    // message = readFileSync(database);
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2], res);
      res.end(`${data}`)

    } catch (error) {
      res.end(error.message)
    }
  }
    
});

app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
