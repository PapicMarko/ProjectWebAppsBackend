const express = require('express')
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
const {DATABASE_URL} = require('./config.json')
const bodyParser = require("body-parser");
const app = express()
const PORT = process.env.PORT || 3000;
const cors = require ('cors')
const userRoutes = require("./Routes/userRoutes"); //bring in our user routes


mongoose.connect(DATABASE_URL)
db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)
app.use("/user", userRoutes); 

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})