export default function createIteratorObject(report) {
	const employees = report.allEmployees;
	const name_list = [];
	for(const names in employees) {
		if(names) {
			name_list.push(...employees[names]);
		}
	}
	return name_list
}
