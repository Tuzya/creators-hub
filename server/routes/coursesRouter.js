const express = require('express');
const { Course } = require('../db/models');

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
  const { id, courseId } = req.params.id;
  const oneCourses = await Course.findByPk({
    where: { company_id: id, id: courseId },
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
