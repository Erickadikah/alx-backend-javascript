const express = require('express');
// const fs = require('fs');
const { spawn } = require('child_process');

{ /*
First implementation to spawn  achild process then use it to filter data
and run node on the file short coming not expected output
*/ }
// localhost
// const hostname = '127.0.0.1';
const app = express();
const port = 1245;

// const app = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     // res.end('Hello Holberton School!');
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  console.log('This is the list of our students');
  // running 3-main_1.js as child proces
  const childProcess = spawn('node', ['3-main_1.js']);
  let output = '';
  const error = '';

  childProcess.stdout.on('data', (data) => {
    output += data.toString();
  });
  childProcess.on('close', (code) => {
    if (code == 0) {
      res.setHeader('Content-Type', 'text/plain');
      res.send(output);
    } else {
      console.error('Error reading file:', err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server runing on port :${port}/`);
});
