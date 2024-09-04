// const express = require('express');
import express from 'express'

// const userController = require('../Controller/userController.mjs')
import userController from '../Controller/userController.mjs'

const router = express.Router();

//Register
router.post('/register-user',userController.register);


export default router;