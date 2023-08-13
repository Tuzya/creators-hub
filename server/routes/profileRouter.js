const express = require('express');
const { User, Course } = require('../db/models');

const router = express.Router();

router.route('/lk').get(async (req, res) => {
  try {
    const { id } = req.session.user;
    const userProfile = await User.findAll({ where: { company_id: id } });
    res.json(userProfile);
  } catch (err) {
    console.log('Ручка, get User: ', err);
  }
});
// .get('/one', async (req, res) => {
//   const { id } = req.session.user;
//   User.findByPk(id, {
//     include: [
//       {
//         model: Course,
//         through: { attributes: [] }, // Указываем, что не нужно возвращать атрибуты связи
//       },
//     ],
//   })
//     .then((user) => {
//       if (user) {
//         const userCourses = user.Courses; // Здесь будут содержаться все курсы пользователя
//         console.log('User Courses:', userCourses);
//         res.status(200).json(userCourses);
//       } else {
//         console.log('User not found');
//       }
//     })
//     .catch((error) => {
//       console.error('Error fetching user:', error);
//     });
//   res.sendStatus(500);
// });

router.route('/profile/lk/:profileId').get(async (req, res) => {
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
