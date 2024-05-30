const express = require('express');
const Router = express.Router();

Router.post('/subjects', (req, res) => {
    try {
        // console.log(global.subjects_data);
        res.send([global.subjects_data]);
    } catch (error) {
        console.log(error.message);
    }
})



module.exports = Router;