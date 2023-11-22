const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const dotenv = require("dotenv");
dotenv.config();
const userinfo = require('../models/loginSystem');


//sign up api

const signup = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

      
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and confirmPassword do not match" });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const loginUser = new userinfo({ username, email, password: hashpassword });
        await loginUser.save();

        res.status(201).json({ message: "User created Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userlog = await userinfo.findOne({ email });
        if (userlog && await bcrypt.compare(password,userlog.password)) {
            const token = jwt.sign({ userId: userlog.id},process.env.PRIVATE_KEY ,{ expiresIn: "1hr" })
            res.status(200).json({ token })
        }
        else {
            res.status(401).json({ error: "invalid credential" })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })

    }
}



module.exports = {
    signup,
    loginuser,
};

