"use strict";
const student1 = {
    firstName: 'Erick',
    lastName: 'Adikah',
    age: 21,
    location: 'Nairobi',
};
const student2 = {
    firstName: 'John',
    lastName: 'Musembi',
    age: 25,
    location: 'kenya',
};
const studentsList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.style.background = "lightgray";
table.appendChild(tbody);
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
