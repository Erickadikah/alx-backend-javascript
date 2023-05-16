async function countStudents(filepath) {
    const fs = require('fs');
    try {
       const data = await fs.promises.readFile(filepath, 'utf-8');
    if (!data) {
        console.error('Cannot load the database')
        return;
    }
    // console.log(data) debug getting binary =>  changed to('utf8')
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    console.log(`Number of students: ${lines.length}`);

    const csStudents = lines.filter((line) => line.endsWith('CS'));
    const csFirstNames = csStudents.map((student) => student.split(',')[0].trim());
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csFirstNames.join(', ')}`);

    const sweStudents = lines.filter((line) => line.endsWith('SWE'));
    const sweFirstNames = sweStudents.map((student) => student.split(',')[0].trim());
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweFirstNames.join(', ')}`);
  } catch (err) {
    console.error('Error reading file:', err);
  }  

}

module.exports = countStudents