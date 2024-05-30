const express = require('express');
const Router = express.Router();
const Completion = require('../model/GetCompletion');

Router.post('/addStatus', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userid = authHeader.split(' ')[1];
    const { subjectcode, completion } = req.body;

    const existingCompletionData = await Completion.findOne({ userid : userid });

    if (existingCompletionData) {
      
      existingCompletionData.completion = completion;
      await existingCompletionData.save();
      console.log('updated');
      res.json({ message: 'Completion data updated successfully' });
    } else {
      // If data doesn't exist, create a new entry in the database
      const newCompletionData = new Completion({
        userid,
        subjectcode,
        completion,
      });
      await newCompletionData.save();
      console.log('added');
      res.json({ message: 'Completion data added successfully' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = Router;
