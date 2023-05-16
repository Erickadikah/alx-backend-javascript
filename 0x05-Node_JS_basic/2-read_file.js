function countStudents(filepath) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(filepath, 'utf8');
    //get the number of students
    //get the number of students in CS
    //get the number of students in SWE
    //filter the first names in both CS and SWE
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    console.log(`Number of students: ${lines.length}`);

    const csStudents = lines.filter((line) => line.endsWith('CS'));
    const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csFirstNames.join(', ')}`);

    const sweStudents = lines.filter((line) => line.endsWith('SWE'));
    const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames.join(', ')}`);
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;