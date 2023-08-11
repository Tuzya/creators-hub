const express = require('express');
const { Course } = require('../db/models');
const { route } = require('./postsRouter');
const upload = require('../middleware/multerMiddleware');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const { id } = req.session.company.id;
    const courses = await Course.findAll({
      where: { company_id: id },
    });
    res.json(courses);
  })
  .post(async (req, res) => {
    const newCourses = await Course.create(req.body);
    res.json(newCourses);
  });

router.route('/:courseId').get(async (req, res) => {
  const { id } = req.params.id;
  const oneCourses = await Course.findByPk({
    where: { company_id: id },
  });
  res.json(oneCourses);
});
// .delete('/:courseId', async (req, res) => {
//   try {
//     await Course.destroy({ where: { id: req.params.id } });
//     res.sendStatus(200);
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

router.post('/:id', upload.single('downloadLink'), async (req, res) => {
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
module.exports = router;
