// const express = require('express');
import express from 'express'

//import controllers
// const userController = require('../Controller/userController.mjs')
import userController from '../Controller/userController.mjs'
import theaterController from '../Controller/theaterController.mjs';
import movieController from '../Controller/movieController.mjs';

//import middlewares
import jwtMiddleware from '../Middleware/jwtMiddleware.mjs'
import multerConfig from '../Middleware/multerMiddleware.mjs';
 
const router = express.Router();

//Register
router.post('/register-user',userController.register);

//Login
router.post('/login-user',userController.login)

//add theater
router.post('/add-theater',jwtMiddleware,theaterController.addTheater)

//add movie
router.post('/add-movie',jwtMiddleware,multerConfig.single('posterImage'),movieController.addMovie)

//movies added by a particular user
router.get('/user-movies',jwtMiddleware,movieController.userMovies)

//theater by a particular user
router.get('/user-theaters',jwtMiddleware,theaterController.userTheaters)


export default router;