const fs = require('fs');

function countStudents(filepath) {
  try {
    // read data
    const data = fs.readFileSync(filepath, 'utf-8');
    // console.log(data)
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    console.log(`Number of students: ${lines.length - 1}`);

    const csStudents = lines.filter((line) => line.endsWith('CS'));
    const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csFirstNames.join(', ')}`);

    const sweStudents = lines.filter((line) => line.endsWith('SWE'));
    const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames.join(', ')}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
