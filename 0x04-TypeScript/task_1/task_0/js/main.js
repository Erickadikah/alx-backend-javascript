"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacherFunction = void 0;
const teacher1 = {
    firstName: 'Erick',
    lastName: 'Adikah',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
    yeaOfExperience: 0
};
const teacher2 = {
    firstName: 'Jackson',
    fullTimeEmployee: false,
    lastName: 'mwari',
    location: 'London',
    contract: false,
    yeaOfExperience: 0
};
console.log(teacher1);
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    yeaOfExperience: 0
};
console.log(director1);
const printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;
exports.printTeacherFunction = printTeacherFunction;
console.log((0, exports.printTeacherFunction)('john', 'doe'));
class StudentClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}
function createStudent(cStudent, firstName, lastName) {
    return new cStudent(firstName, lastName);
}
const student1 = createStudent(StudentClass, 'Samule', 'Adikah');
console.log(student1);
