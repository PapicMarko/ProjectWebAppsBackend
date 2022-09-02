const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const {DATABASE_URL} = require('./config.json')
const app = express()
const port = 3000
const cors = require ('cors')

mongoose.connect(DATABASE_URL)
db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })