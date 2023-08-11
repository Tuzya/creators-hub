const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.session.company.id;
    const courses = await User.findAll({
      where: { company_id: id },
    });
    res.json(courses);
  } catch (err) {
    console.log('Ручка, get User: ', err);
  }
});

router.route('/:id/profile/:profileId').get(async (req, res) => {
  const { id, profileId } = req.params;
  const courses = await User.findByPk({
    where: { company_id: id, id: profileId },
  });
  res.status(200).json(courses);
});

//   .delete('/:id', async (req, res) => {
//     try {
//       await User.destroy({ where: { id: req.params.id } });
//       res.sendStatus(200);
//     } catch (err) {
//       console.error(err);
//       res.sendStatus(500);
//     }
//   });
module.exports = router;
