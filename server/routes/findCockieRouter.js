const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    const { user } = req.session;
    const id = { id: user.id };
    res.json(user);
  }
});
module.exports = router;
