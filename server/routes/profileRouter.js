const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router
  .route('/lk')
  .get(async (req, res) => {
    try {
      const { id } = req.session.user;
      const userProfile = await User.findAll({ where: { company_id: id } });
      res.json(userProfile);
    } catch (err) {
      console.log('Ручка, get User: ', err);
    }
  })
  .get(async (req, res) => {
    try {
      const { id } = req.session.user;
      const userProfile = await User.findByPk(id);
      res.json(userProfile);
    } catch (err) {
      console.log('Ручка, get User: ', err);
    }
  });

router.route('/profile/:profileId').get(async (req, res) => {
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
