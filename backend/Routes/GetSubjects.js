const express = require('express');
const Router = express.Router();
const Subject = require('../model/Subject');

Router.get('/getsubject', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    // console.log('header is ', authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const subject = await Subject.findOne({ code: token });
    // console.log('subject is', subject);

    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    // console.log(subject);
    res.json(subject);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = Router;
