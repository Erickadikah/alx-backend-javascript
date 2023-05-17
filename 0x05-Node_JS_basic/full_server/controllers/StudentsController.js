const fs = require('fs');

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

class StudentsController {
  static getAllStudents(req, res) {
    const filepath = '../database.csv';
    readDatabase(filepath)
      .then((data) => {
        // Processing the data
        const lines = data.split('\n').filter((line) => line.trim().length > 0);
        const csStudents = lines.filter((line) => line.endsWith('CS'));
        const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());
        const sweStudents = lines.filter((line) => line.endsWith('SWE'));
        const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());
        const response = `This is the list of our students\n`
          + `Number of students in CS: ${csStudents.length}. List: ${csFirstNames.join(', ')}\n`
          + `Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames.join(', ')}`;

        // Send the response
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/plain');
        res.send(response);
      })
      .catch((error) => {
        console.log(error);
        res.statusCode = 500;
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filepath = '../database.csv';
    const major = req.params.major;
    readDatabase(filepath)
      .then((data) => {
        if(!data) {
            res.statusCode = 500;
            res.send('Cannot load the database');
            return;
        }

    if (major === 'CS') {
    // Filter students by major "CS"
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const csStudents = lines.filter((line) => line.endsWith('CS'));
    const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());
    const response = `${major}${csFirstNames.join(', ')}`;
        res.send(response)
    } else if (major === 'SWE') {
    // Filter students by major "SWE"
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const sweStudents = lines.filter((line) => line.endsWith('SWE'));
    const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());
    const response = `${major} ${sweFirstNames.join(', ')}`;
        res.send(response)
    } else {
        res.statusCode = 500;
        res.send('Major parameter must be CS or SWE');
        return;

    };

        // Send the response
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/plain');
        res.send(response);
      })
      .catch((error) => {
        console.log(error);
        res.statusCode = 500;
        res.send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
