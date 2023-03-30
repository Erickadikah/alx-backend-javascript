import { PrintTwoTone } from "@material-ui/icons";

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yeaOfExperience: number;
    fullTimeEmployee: boolean;
    location: string;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher ={
    firstName: 'Erick',
    lastName: 'Adikah',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
    yeaOfExperience: 0
}

const teacher2: Teacher = {
    firstName: 'Jackson',
    fullTimeEmployee: false,
    lastName: 'mwari',
    location: 'London',
    contract: false,
    yeaOfExperience: 0
}
console.log(teacher1);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    yeaOfExperience: 0
};

console.log(director1);

interface  printTeacher {
    (firstName: string, lastName:string): string;

}

interface StuentClassIntaface {
    firstName: string;
    lastName: string;
}

export const printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;
console.log(printTeacherFunction('john', 'doe'))


interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StuentClassIntaface; 
}

class StudentClass implements StuentClassIntaface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework () {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName:string): StuentClassIntaface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'Samuel', 'Adikah');
console.log(student1);
