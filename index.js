require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || '9000'
const { studentsRouter } = require('./routes/students')
const { usersRouter } = require('./routes/users')

app.use(cors())
app.use(express.json())
app.use(studentsRouter, usersRouter)



app.listen(port, () => console.log("monsterss"))