const { threadId } = require('worker_threads');
const express = require('express');
const { Course, User, CoursesUser } = require('../db/models');
const upload = require('../middleware/multerPdfMiddleware');

const router = express.Router();

router.route('/allcourses').get(async (req, res) => {
  if (req.session.company) {
    try {
      const { id } = req.session.company;
      console.log('company ==========', req.session.company);
      const courses = await Course.findAll({
        where: { company_id: id },
      });
      //   console.log(courses);
      res.json(courses);
    } catch (err) {
      console.log(err);
    }
  }
  if (req.session.user) {
    try {
      const companyId = req.session.user.company_id;
      console.log('user', req.session.user);
      const courses = await Course.findAll({
        where: { company_id: companyId },
      });
      //   console.log(courses);
      res.json(courses);
    } catch (err) {
      console.log(err);
    }
  } else {
    return console.log('Ничего');
  }
});

// router.route('/allcourses/foruser').get(async (req, res) => {
//   const companyId = req.session.user.company_id;
//   // console.log('server', id);
//   const courses = await Course.findAll({
//     where: { company_id: companyId },
//   });
//   //   console.log(courses);
//   res.json(courses);
// });

router.route('/allcourses/:courseId').get(async (req, res) => {
  const id = req.params.courseId;
  const oneCourses = await Course.findByPk(id);
  res.json(oneCourses);

}).delete(async (req, res) => {
    try {
      await Course.destroy({ where: { id: req.params.courseId } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .put((async (req, res) => {
    const { courseId } = req.params;
    const course = await Course.findOne({ where: { id: courseId } });
    const downloadLink = req.file ? req.file.filename : '';
    const { title, body } = req.body;
    try {
      course.title = title;
      course.body = body;
      course.downloadLink = downloadLink;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Произошла ошибка при добавлении курса!' });
    } await course.save();
    return res.json(course);
  }));

router.route('/lk/alluser').get(async (req, res) => {
  try {
    console.log('сюда зашёл');
    const { id } = req.session.company;
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
  const { id } = req.session.company;
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
      return res.status(404).json({ error: 'Пользователь или курс не найдены' });
    }

    const existingAssignment = await CoursesUser.findOne({
      where: {
        user_id: user.id,
        courses_id: course.id,
      },
    });

    if (existingAssignment) {
      return res.status(400).json({ error: 'Курс уже назначен этому пользователю' });
    }

    await CoursesUser.create({
      user_id: user.id,
      courses_id: course.id,
      status: false,
    });

    res.status(200).json({ message: 'Курс успешно назначен пользователю' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Произошла ошибка при назначении курса пользователю' });
  }
});

module.exports = router;
