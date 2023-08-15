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
  .route('/one-question/:courseId/question-all-answers')
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

router
  .route('/all-course-question/:courseId/allquestions')
  .get(async (req, res) => {
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
  .route('/all-questions-answer/:courseId/allquestions/:questionId')
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
  .route('/add-answer/:courseId/allquestions/:questionId/addAnswers')
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

router
  .route('/putanswer/:courseId/allquestions/:questionId/answer/:answerId')
  .put(async (req, res) => {
    const { answerId } = req.params;
    const answer = await Answer.findOne({ where: { id: answerId } });
    answer.isCorrect = !answer.isCorrect;
    await answer.save();
    return res.status(200).json(answer);
  })
  .delete(async (req, res) => {
    try {
      const { answerId } = req.params;
      await Answer.destroy({ where: { id: answerId } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

// изменение вопроса
router
  .route('/allcourses/:courseId/addQuestion/:questionId')
  .put(async (req, res) => {
    console.log('serverrrrrrrrrrrr');
    const { questionId } = req.params;
    const question = await Question.findOne({ where: { id: questionId } });
    question.question = req.body.question;
    await question.save();
    return res.json(question);
  });
module.exports = router;
