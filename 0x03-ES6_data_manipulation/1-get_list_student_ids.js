export default function getListStudentIds(obj) {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    	{ id: 2, firstName: 'James', location: 'Columbia' },
    	{ id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const mappedstudents = students.map((student) => student.id);
  console.log(mappedstudents);
  if (Array.isArray(obj)) {
    	return mappedstudents;
  }
  return [];
}
