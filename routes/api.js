const express = require('express');
//const router = express.Router();
var router = require('express-promise-router')();
 //const Student = require('../models/student');
const studentController = require('../controller/studentController');

router.route('/')
 .get(studentController.index);

//adding  a student and getting all student
router.route('/students')
.post(studentController.addStudent)
.get(studentController.allStudent);


//particular student route
router.route('/students/:id')
.get(studentController.student)
.put(studentController.editStudent)
.delete(studentController.deleteStudent);

module.exports = router;
