const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/students', (request, response) => {
  Student.query()
    .then(students => response.json(students))
})

router.put('./student/id', (request, response) => {
  const { points } = request.body

  Student.query()
    .findById(id)
    .patch({
      points: points
    })
    .then(points => response.json(points))
})

module.exports = { studentsRouter: router };