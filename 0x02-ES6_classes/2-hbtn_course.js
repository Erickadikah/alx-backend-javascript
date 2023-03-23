class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }

    if (typeof students !== 'object') {
      throw TypeError('students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name = '') {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length = 0) {
    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students = []) {
    if (typeof students !== 'object') {
      throw TypeError('students must be an array');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
