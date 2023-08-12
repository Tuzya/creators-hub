const { threadId } = require('worker_threads');
const express = require('express');
const { Course, Question, Answer } = require('../db/models');
// const question = require('../db/models/question'); это что ?
// const { route } = require('./postsRouter')
const upload = require('../middleware/multerMiddleware');

const router = express.Router();

router.route('/allcourses').get(async (req, res) => {
  const { id } = req.session.user;
  console.log('server', id);
  const courses = await Course.findAll({
    where: { company_id: 2 },
  });
  //   console.log(courses);
  res.json(courses);
});
router
  .route('/allcourses/:courseId')
  .get(async (req, res) => {
    const { courseId } = req.params.id;
    const oneCourses = await Course.findByPk({
      where: { id: courseId },
    });
    res.json(oneCourses);
  })
  .delete(async (req, res) => {
    try {
      await Course.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

router.route('/allcourses/:courseId/addQuestion').get(async (req, res) => {
  try {
    const { courseId } = req.params;
    const courses = await Question.findAll({
      where: { courses_id: courseId },
      include: Answer,
    });
    res.json(courses);
  } catch (err) {
    console.log('Ручка, get User: ', err);
  }
});

router.post('/lk', upload.single('downloadLink'), async (req, res) => {
  const { title, body } = req.body;
  const downloadLink = req.file ? req.file.filename : '';
  //   const { id } = req.session.user;
  try {
    const course = await Course.create({
      title,
      body,
      downloadLink,
      //   company_id: id,
    });

    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Произошла ошибка при добавлении курса!' });
  }
});
module.exports = router;
