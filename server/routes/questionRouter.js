const express = require('express');
const { Question, Answer } = require('../db/models');

const router = express.Router();

router.post('/allcourses/:courseId/addQuestion', async (req, res) => {
  try {
    const { courseId } = req.params;
    console.log('asdas', req.body);
    const courses = await Question.create({
      ...req.body,
      courses_id: courseId,
    });
    res.json(courses);
  } catch (err) {
    console.log('Ручка, get Question create: ', err);
  }
});

router
  .route('/allcourses/:courseId/question-all-answers')
  .get(async (req, res) => {
    try {
      const { courseId } = req.params;
      const allQuestionAnswers = await Question.findAll({
        where: { courses_id: Number(courseId) },
        include: Answer,
      });
      res.json(allQuestionAnswers);
    } catch (err) {
      console.log('Ручка, достаём вопросы и ответы: ', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.route('/allcourses/:courseId/allquestions').get(async (req, res) => {
  try {
    const { courseId } = req.params;
    const allQuestion = await Question.findAll({
      where: { courses_id: courseId },
    });
    res.json(allQuestion);
  } catch (err) {
    console.log('Ручка, get Достать все  вопросы: ', err);
  }
});

router
  .route('/allcourses/:courseId/allquestions/:questionId')
  .get(async (req, res) => {
    try {
      const { questionId } = req.params;
      const allQuestion = await Answer.findAll({
        where: { question_id: questionId },
      });
      res.json(allQuestion);
    } catch (err) {
      console.log('Ручка, get Достать все ответы к вопросу: ', err);
    }
  });

router
  .route('/allcourses/:courseId/allquestions/:questionId/addAnswers')
  .post(async (req, res) => {
    try {
      console.log('hi');
      const { questionId } = req.params;
      const allQuestion = await Answer.create({
        ...req.body,
        question_id: questionId,
      });
      res.json(allQuestion);
    } catch (err) {
      console.log('Ручка, get Достать все ответы к вопросу: ', err);
    }
  });
module.exports = router;
