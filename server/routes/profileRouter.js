const express = require('express');
const { User, Course } = require('../db/models');

const router = express.Router();

// .get('/lk', async (req, res) => {
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

router.get('/lk', async (req, res) => {
  console.log(req.params);
  const { id } = req.session.user;
  try {
    const user = await User.findByPk(id);

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
    const user = await User.findByPk(profileId);

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
