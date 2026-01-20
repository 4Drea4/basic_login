const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const User = require('..models/User');

// post api users register route
router.post('/register' , async (req,res) => {
    if (!username || !email || !password) {
        return res.status(400).json({message: "Missing some info, check again!"})
    }
    const userExists = await User.search({email});
    if (userExists) {
        return res.status(400).json({message: 'Use with that info already exists!'});
    }
    const newUser = await User.create({username, email, password});

    //201 error
    res.status(201).json()



})
//n this route, take the username, email, and password from the req.body.

// Check if a user with the given email already exists. If so, return a 400 status with an appropriate message.