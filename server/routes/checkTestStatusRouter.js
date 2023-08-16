const express = require('express');

const router = express.Router();
const CoursesUser = require('../db/models/courses_user'); 

router.post('/', async (req, res) => {
  const { courseId } = req.body;

  try {
    const courseUser = await CoursesUser.findOne({
      where: {
        courses_id: courseId,
      },
    });

    if (!courseUser) {
      return res.status(404).json({ error: 'Запись о курсе не найдена' });
    }

    courseUser.status = true;
    await courseUser.save();

    res.status(200).json({ message: 'Статус курса успешно обновлен' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Произошла ошибка при обновлении статуса курса' });
  }
});


router.patch('/status/:courseId', async (req, res) => {
  const { courseId } = req.params;

  try {
    const courseUser = await CoursesUser.findOne({
      where: {
        user_id: req.session.user.id,
        courses_id: courseId,
      },
    });

    if (!courseUser) {
      return res.status(404).json({ error: 'Запись о курсе не найдена' });
    }

    courseUser.status = true;
    await courseUser.save();

    res.status(200).json({ message: 'Статус курса успешно обновлен' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Произошла ошибка при обновлении статуса курса' });
  }
});

// router.get('/', async (req, res) => {
//   const { courseId } = req.body;

//   try {
//     const courseUser = await CoursesUser.findOne({
//       where: {
//         courses_id: courseId,
//       },
//     });

//     if (!courseUser) {
//       return res.status(404).json({ error: 'Запись о курсе не найдена' });
//     }

//     courseUser.status = true;
//     await courseUser.save();

//     res.status(200).json({ message: 'Статус курса успешно обновлен' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Произошла ошибка при обновлении статуса курса' });
//   }
// });

module.exports = router;
