const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/students', (request, response) => {
  Student.query()
    .then(students => response.json(students))
})

router.patch('/students/:id', (request, response) => {
  const { points } = request.body
  const { id } = request.params

  Student.query()
    .patchAndFetchById(id, { points })
    .then(({ points }) => response.json(points))
})

module.exports = { studentsRouter: router };