const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

router.post('/', controller.addStudent);
router.get('/', controller.getAllStudents);
router.get('/:id', controller.getStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;