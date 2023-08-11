const express = require('express');
const { Question } = require('../db/models');

const router = express.Router();

router.route('/:id').get(async (req, res) => {
  try {
    const { courseId } = req.params;
    const courses = await Question.findAll({
      where: { courses_id: courseId },
    });
    res.json(courses);
  } catch (err) {
    console.log('Ручка, get User: ', err);
  }
});
