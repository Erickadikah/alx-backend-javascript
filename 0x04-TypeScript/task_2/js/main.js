var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ("Working from home");
    };
    Director.prototype.getCoffeeBreak = function () {
        return ("Getting a coffee break");
    };
    Director.prototype.workDirectorTasks = function () {
        return ("Getting to director tasks");
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ("Cannot work from home");
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ("Cannot have a break");
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ("Getting to work");
    };
    return Teacher;
}());
function createEmployee(salary) {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
var isDirector = function (employee) { return employee instanceof Director; };
var executeWork = function (employee) {
    var response;
    isDirector(employee) ? response = employee.workDirectorTasks() : response = employee.workTeacherTasks();
    return response;
};
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
var teachClass = function (todayClass) { return todayClass === 'Math' ? 'Teaching math' : 'Teaching History'; };
console.log(teachClass('Math'));
console.log(teachClass('History'));
