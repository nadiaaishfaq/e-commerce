const express = require('express')
const mongoose = require('./config/connection')
const bodyParser = require('body-parser')
const app = express()
let cors = require ('cors');
const dotenv = require("dotenv")



dotenv.config();
let PORT = process.env.PORT || 8080
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))


app.listen(PORT, "localhost", (req, res, next) => {
    console.log(`server starting at https://localhost:${PORT}`)
})