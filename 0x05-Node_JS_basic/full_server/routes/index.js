const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const app = express();

// Define routes
app.get('/', AppController.getHomepage);

app.get('/students', StudentsController.getAllStudents);

app.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = app;
