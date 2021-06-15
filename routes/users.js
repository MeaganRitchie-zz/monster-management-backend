const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../models/user');

const authenticate = (request, response, next) => {
  const { authorization } = request.headers

  if (!authorization) {
    response.status(403).json({ error: "Bearer token must be present" })
  } else {
    const token = authorization.split(' ')[1]
    const secret = process.env.SECRET
    try {
      const decoded_token = jwt.verify(token, secret)
      const { user_id } = decoded_token
      User.query()
        .findById(user_id)
        .withGraphFetched('students')
        .then(user => {
          request.user = user
          next()
        });
    } catch (error) {
      response.status(403).json({ error: "Invalid bearer token" })
    }
  }
}

router.get('/users', (request, response) => {
  User.query()
    .withGraphFetched('students')
    .then(users => response.json(users))
})

router.get('/profile', authenticate, (request, response) => {
  response.json({ user: request.user })
});

router.post('/users', (request, response) => {
  const { user } = request.body
  bcrypt.hash(user.password, 12)
    .then(hashedPassword => {
      User.query()
        .insert({
          fullname: user.fullname,
          username: user.username,
          password_digest: hashedPassword
        })
        .then(newUser => response.status(201).json(newUser))
    })
})

router.post('/login', (request, response) => {
  const { user } = request.body

  User.query()
    .findOne({ username: user.username || "" })
    .then(existingUser => {
      if (!existingUser) {
        response.status(401).json({ error: 'Invalid username or password' })
      } else {
        bcrypt.compare(user.password, existingUser.password_digest)
          .then(isMatch => {
            if (!isMatch) {
              response.status(401).json({ error: 'Invalid username or password' })
            } else {
              const secret = process.env.SECRET
              const payload = { user_id: existingUser.id }
              const token = jwt.sign(payload, secret)
              response.status(200).json({ token, user: existingUser })
            }
          })
      }
    })
})

module.exports = { usersRouter: router }