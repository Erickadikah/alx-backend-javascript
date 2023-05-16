const fs = require('fs');

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf8');
    // console.log(data)
    const numStd = (data).split('\n');
    const stdNum = numStd.length - 1;
    console.log(`Number of students: ${stdNum}`);
    const csStudents = numStd.filter((numStds) => numStds.endsWith('CS'));
    // console.log(typeof(num_std[1])
    // console.log(typeof(csStudents))
    csStudents.forEach((student, index) => {
      csStudents[index] = student.split(',')[0].trim();
    });
    // console.log(csStudents.length)
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    const sweStudents = numStd.filter((numStds) => numStds.endsWith('SWE'));
    sweStudents.forEach((student, index) => {
      sweStudents[index] = student.split(',')[0].trim();
    });
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
