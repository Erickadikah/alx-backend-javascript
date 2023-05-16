const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile('database.csv', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }
      console.log('This is the list of our students');
      const lines = data.split('\n');
      const students = lines.length - 1;
      console.log(`Number of students: ${students}`);

      const csStudents = lines.filter((line) => line.endsWith('CS'));
      csStudents.forEach((student, index) => {
        csStudents[index] = student.split(',')[0].trim();
      });
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);

      const sweStudents = lines.filter((line) => line.endsWith('SWE'));
      sweStudents.forEach((student, index) => {
        sweStudents[index] = student.split(',')[0].trim();
      });
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

      const responseBody = `
        Number of students: ${students}
        Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}
        Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}
      `;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(responseBody);
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
