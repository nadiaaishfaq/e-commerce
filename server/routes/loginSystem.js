const express = require('express')
const router=express.Router();
const userController=require('../controllers/loginSystem')
const {authenticateWithToken,authenticateRole}=require('../middleware/usermiddleware')

// creating router user controllers
router.post("/SignupUser" ,userController.signup)
router.post("/loginUser",authenticateRole(["user"]),authenticateWithToken,userController.loginuser)



module.exports=router