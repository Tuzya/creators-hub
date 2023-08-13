const express = require('express');
const { Person } = require('../db/models');

const router = express.Router();

router.get('/person', async (req, res) => {
  const { id } = req.session.user;
  try {
    const user = await Person.findOne({
      where: { user_id: id },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      console.log('User not found');
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.sendStatus(500);
  }
});

router.get('/lk/:profileId', async (req, res) => {
  console.log(req.params);
  const { profileId } = req.params;
  console.log('Received profileId:', profileId);
  try {
    const user = await Person.findOne({
      where: { user_id: profileId },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      console.log('User not found');
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
