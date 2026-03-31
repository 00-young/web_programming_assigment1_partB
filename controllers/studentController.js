const students = require('../data/studentData');
const Student = require('../models/student');

exports.addStudent = (req, res) => {
    const data = req.body;
    const student = new Student(data.name, data.age, data.id);
    students.push(student);
    res.json(student);
  };

exports.getAllStudents = (req, res) => {
  res.json(students);
};

exports.getStudent = (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
};

exports.deleteStudent = (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students.splice(index, 1);
  }
  res.send("Deleted");
};