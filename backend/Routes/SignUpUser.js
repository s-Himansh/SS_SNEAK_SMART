const express = require('express');
const Router = express.Router();
const User = require('../model/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

Router.post('/signup', [body('email', 'Incorrect Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 }), body('name').isLength({ min: 3 })], async(req, res) => {
    
    // applying some basic validation on the input data 
    const anyError = validationResult(req);
    if (!anyError.isEmpty()){
        return res.status(400).json({ anyError: anyError.array() });
    }

    // encrypting the password
    const salt = await bcrypt.genSalt(12);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    try {
        const newUser = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : securePassword,
            nickname : req.body.nickname,
            age : req.body.age,
            description : req.body.description
        })

        res.json({success : true});
    } catch (error) {
        console.log(error.message);
        res.json({success : false});
    }
})

module.exports = Router;