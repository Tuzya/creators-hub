const express = require('express');
const { Course, Theme, Question, Answer } = require('../db/models');
const { threadId } = require('worker_threads');
const question = require('../db/models/question');

const router = express.Router();

router.route('/:id/allcourses').get(async (req, res) => {
  console.log(req.session.user.id);
  const { id } = req.session.user;
  const courses = await Course.findAll({
    where: { company_id: id },
  });
  res.json(courses);
});

router.get('/:id/allcourses/:courseId/addQuestion', async (req, res) => {
  const { courseId } = req.params;
  const allQuestion = await Question.findAll({
    where: { course_id: courseId },
    include: Answer,
  });
  res.json(allQuestion);
});

router.route('/:id/allcourses/:courseId').get(async (req, res) => {
  const { id, course_id } = req.params.id;
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

module.exports = router;
