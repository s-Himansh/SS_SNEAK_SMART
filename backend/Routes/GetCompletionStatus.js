const express = require('express');
const router = express.Router();
const Completion = require('../model/GetCompletion');

router.get('/completstatus', async (req, res) => {
  try {
    // console.log('entered');
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userId = authHeader.split(' ')[1];
    // console.log('userId is ',userId);

    const completionData = await Completion.findOne({ userid : userId });

    if (!completionData) {
      return res.status(404).json({ error: 'Completion data not found' });
    }
    res.json(completionData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
