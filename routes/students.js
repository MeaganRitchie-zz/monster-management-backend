const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/students', (request, response) => {
  Student.query()
    .then(students => response.json(students))
})

module.exports = { studentsRouter: router };