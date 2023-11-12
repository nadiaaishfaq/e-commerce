const express = require('express')
const mongoose = require('./config/connection')
const bodyParser = require('body-parser')
const app = express()
let cors = require ('cors');
const dotenv = require("dotenv")

const quantityApi = require('./routes/quantity')
const productApi= require('./routes/productschma')
const usersigup = require('./routes/loginSystem')
const categoryApi = require('./routes/category'); 

dotenv.config();
let PORT = process.env.PORT || 8080
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/uploads',express.static('uploads'))
app.use('/Quantity',quantityApi)
app.use('/Product',productApi)
app.use('/LoginSystem', usersigup)
app.use('/Category', categoryApi);
app.listen(PORT, "localhost", (req, res, next) => {
    console.log(`server starting at https://localhost:${PORT}`)
})