// Implement a class that models a course

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('"name" must be a string');
    }
    this._name = value;
  }

  get _length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('"length" must be a number');
    }
    this._length = value;
  }

  get students() {
    return this.students;
  }
  set students(value) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError('"students" must be an array of strings');
    }
    this._students = value;
  }
}
