const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// post api users register route
router.post('/register' , async (req,res) => {
    try{
        const {username,email,password} = req.body;

    //validate
    if (!username || !email || !password) {
        return res.status(400).json({message: "Missing some info, check again!"});
    }
    //does the user exist?
    const userExists = await User.findOne({email});
    if (userExists) {
        return res.status(400).json({message: 'Use with that info already exists!'});
    }
    const newUser = await User.create({username, email, password});

    //201 error
    res.status(201).json(newUser);

} catch (error) {
    res.status(400).json({
        message: 'User couldnt be registered',
        error: error.message
    });
}
});
module.exports = router;
// Check if a user with the given email already exists. If so, return a 400 status with an appropriate message.