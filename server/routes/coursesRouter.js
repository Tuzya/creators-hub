const { threadId } = require('worker_threads');
const express = require('express');
const { Course, User, CoursesUser } = require('../db/models');
const upload = require('../middleware/multerPdfMiddleware');

const router = express.Router();

router.route('/allcourses').get(async (req, res) => {
  const { id } = req.session.user;
  // console.log('server', id);
  const courses = await Course.findAll({
    where: { company_id: id },
  });
  //   console.log(courses);
  res.json(courses);
});
router.route('/allcourses/:courseId').get(async (req, res) => {
  const id = req.params.courseId;
  const oneCourses = await Course.findByPk(id);
  res.json(oneCourses);
});

router.delete('/allcourses/:courseId', async (req, res) => {
  try {
    await Course.destroy({ where: { id: req.params.courseId } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.route('/lk/alluser').get(async (req, res) => {
  try {
    console.log('сюда зашёл');
    const { id } = req.session.user;
    const userProfile = await User.findAll({ where: { company_id: id } });
    console.log(userProfile);
    res.json(userProfile);
  } catch (err) {
    console.log('Ручка, get User: ', err);
  }
});

router.post('/lk', upload.single('downloadLink'), async (req, res) => {
  const { title, body } = req.body;
  const downloadLink = req.file ? req.file.filename : '';
  const { id } = req.session.user;
  try {
    const course = await Course.create({
      title,
      body,
      downloadLink,
      company_id: id,
    });
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Произошла ошибка при добавлении курса!' });
  }
});

router.post('/addcourse', async (req, res) => {
  const { userId, selectedCourses } = req.body;

  try {
    const user = await User.findByPk(userId);
    const course = await Course.findOne({ where: { id: selectedCourses } });

    if (!user || !course) {
      return res
        .status(404)
        .json({ error: 'Пользователь или курс не найдены' });
    }

    await CoursesUser.create({
      user_id: user.id,
      courses_id: course.id,
      status: true,
    });

    res.status(200).json({ message: 'Курс успешно назначен пользователю' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Произошла ошибка при назначении курса пользователю' });
  }
});


// router.post('/addcourse', async (req, res) => {
//   const { userId, selectedCourses } = req.body;

//   try {
//     const user = await User.findByPk(userId);

//     if (!user) {
//       return res
//         .status(404)
//         .json({ error: 'Пользователь не найден' });
//     }

//     for (const courseId of selectedCourses) {
//       const course = await Course.findOne({ where: { id: courseId } });

//       if (!course) {
//         return res
//           .status(404)
//           .json({ error: `Курс с ID ${courseId} не найден` });
//       }

//       await CoursesUser.create({
//         user_id: user.id,
//         course_id: course.id,
//         status: true,
//       });
//     }

//     res.status(200).json({ message: 'Курсы успешно назначены пользователю' });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'Произошла ошибка при назначении курсов пользователю' });
//   }
// });
module.exports = router;
