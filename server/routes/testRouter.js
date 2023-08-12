const express = require('express');
const { Question, Answer } = require('../db/models');

const router = express.Router();

// добавление вопроса
router
  .route('/company/allcourses/:id/addQuestions')
  .post(async (req, res) => {
    const newQuestion = await Question
      .create({ question: req.body.question, course_id: req.params.id });
    res.json(newQuestion);
  });
// добавление ответа
router
  .route('/company/allcourses/:id/allquestions/:id')
  .post(async (req, res) => {
    const newAnswer = await Answer
      .create({ answer: req.body.answer, question_id: req.params.id });
    if (req.body.status === 1) {
      newAnswer.isCorrect = true;
    } else {
      newAnswer.isCorrect = false;
    }
    newAnswer.save();
    res.json(newAnswer);
  });
