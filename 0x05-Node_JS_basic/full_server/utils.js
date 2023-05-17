const fs = require('fs').promises;

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim().length > 0);
        const students = {};

        lines.forEach((line) => {
          const [firstName, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName.trim());
        });

        resolve(students);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
module.exports = readDatabase;
