const Person = require('./person');

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
}

module.exports = Student;