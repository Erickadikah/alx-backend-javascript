var teacher1 = {
    firstName: 'Erick',
    lastName: 'Adikah',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
    yeaOfExperience: 0
};
var teacher2 = {
    firstName: 'Jackson',
    fullTimeEmployee: false,
    lastName: 'mwari',
    location: 'London',
    contract: false,
    yeaOfExperience: 0
};
console.log(teacher1);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    yeaOfExperience: 0
};
console.log(director1);
export var printTeacherFunction = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
console.log(printTeacherFunction('john', 'doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
function createStudent(cStudent, firstName, lastName) {
    return new cStudent(firstName, lastName);
}
var student1 = createStudent(StudentClass, 'Samuel', 'Adikah');
console.log(student1);
//# sourceMappingURL=main.js.map