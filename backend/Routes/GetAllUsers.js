const express = require('express');
const cors = require('cors');
const Router = express.Router();
const User = require('../model/User');


Router.use(cors());

Router.get('/allclassmates', async (req, res) => {
    try {
       // console.log(global.user_data);
        res.json(global.user_data);
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = Router;