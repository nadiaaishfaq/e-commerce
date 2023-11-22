const mongoose = require('mongoose');

const { isEmail, isnt } = require('validator')
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: isEmail,
            message: 'Invalid email address'
        }

    },
    password: {
        type: String,
        required: true,
        minlenght: 8

    },
    confirmPassword: {
        type: String,
        required: true,
        
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },

  

   

})

module.exports = mongoose.model("LoginSystem", loginSchema)


