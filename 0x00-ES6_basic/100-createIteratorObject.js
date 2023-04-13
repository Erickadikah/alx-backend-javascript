export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const Listname = [];
  for (const names in employees) {
    if (names) {
      Listname.push(...employees[names]);
    }
  }
  return Listname;
}
