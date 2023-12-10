const express = require("express")
const { loginUser, signupUser} = require('../controllers/userController')
const router = express.Router()

//Login router
router.post('/login', loginUser)


//Signup router
router.post('/signup', signupUser)


module.exports = router