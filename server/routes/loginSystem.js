const express = require('express')
const router=express.Router();
const userController=require('../controllers/loginSystem')


// creating router user controllers
router.post("/SignupUser",userController.signup)
router.post("/loginUser",userController.loginuser)



module.exports=router