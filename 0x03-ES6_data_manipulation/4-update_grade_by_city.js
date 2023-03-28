export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((element) => element.location === city).map((element) => {
    element.grade = 'N/A'; // eslint-disable-line no-param-reassign
    for (const grad of newGrades) {
      if (grad.studentId === element.id) {
        element.grade = grad.grade; // eslint-disable-line no-param-reassign
      }
    }
    return element;
  });
}
