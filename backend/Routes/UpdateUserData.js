const express = require('express');
const cors = require('cors');
const Router = express.Router();
const User = require('../model/User');



Router.put('/updateProfile', async (req, res) => {
    try {
      const userId = req.headers.authorization.split(' ')[1];
      const updatedProfile = req.body;
  
      const result = await User.updateOne({ _id: userId }, { $set: updatedProfile });
      //  console.log(result);
      res.json({ success: 'true' });
    } catch (error) {
      console.error('Error updating profile:', error.message);
      res.status(500).json({ success : 'false' });
    }
  })


  module.exports = Router;