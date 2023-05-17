const express = require('express');
const fs = require('fs');

const app = express();

// localhost
const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  // res.send('This is the list of our students')
  fs.readFile('database.csv', 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file', err);
      res.statusCode = 500;
      res.setHeader('content-Type', 'text/plain');
      res.send('Internal Server Error');
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    // console.log(`Number of students: ${lines.length - 1}`);
    const csStudents = lines.filter((line) => line.endsWith('CS'));
    const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());

    const sweStudents = lines.filter((line) => line.endsWith('SWE'));
    const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());

    const response = `This is the list of our students \nNumber of students: ${lines.length - 1}\n`
        + `Number of students in CS: ${csStudents.length}. List: ${csFirstNames.join(', ')}\n`
        + `Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames.join(', ')}`;
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.send(response);
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
