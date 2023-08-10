const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router
  .route('/:id')
  .get(async (req, res) => {
    const courses = await User.findAll({
      where: { company_id: req.params.id },
    });
    res.json(courses);
  })
  .delete('/:id', async (req, res) => {
    try {
      await User.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

router.route('/id/profile/:profileId').get(async (req, res) => {
  const courses = await User.findByPk({
    where: { company_id: req.params.profileId },
  });
  res.json(courses);
});

module.exports = router;
