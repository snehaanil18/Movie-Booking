// const express = require('express');
import express from 'express'

// const userController = require('../Controller/userController.mjs')
import userController from '../Controller/userController.mjs'
import theaterController from '../Controller/theaterController.mjs';

//import jwt middleware
import jwtMiddleware from '../Middleware/jwtMiddleware.mjs'
 
const router = express.Router();

//Register
router.post('/register-user',userController.register);

//Login
router.post('/login-user',userController.login)

//add theater
router.post('/add-theater',jwtMiddleware,theaterController.addTheater)


export default router;