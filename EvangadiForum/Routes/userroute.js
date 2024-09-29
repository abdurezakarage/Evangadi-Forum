const express = require("express");
const router = express.Router();
module.exports=router
//registration route
//user controller
const {register,login,checkuser} = require("../Controller/usercontroller")
router.post('/register',register)
//login route
router.post('/login',login)
//check user
router.get('/check',checkuser)




