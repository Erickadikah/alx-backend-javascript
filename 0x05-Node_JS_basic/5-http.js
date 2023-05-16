const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    fs.readFile('database.csv', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }
      // console.log('This is the list of our students');
      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      // console.log(`Number of students: ${lines.length - 1}`);

      const csStudents = lines.filter((line) => line.endsWith('CS'));
      const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());

      const sweStudents = lines.filter((line) => line.endsWith('SWE'));
      const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());

      const response = 'This is the list of our students\n'
        + `Number of students: ${lines.length - 1}\n`
        + `Number of students in CS: ${csStudents.length}. List: ${csFirstNames.join(', ')}\n`
        + `Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames.join(', ')}`;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(response);
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
