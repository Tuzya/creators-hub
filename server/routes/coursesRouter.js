const express = require('express');
const { Course } = require('../db/models');

const router = express.Router();

router
  .route('/:id/allcourses')
  .get(async (req, res) => {
    console.log(req.session.user.id);
    // const { id } = req.session.user;
    const courses = await Course.findAll();
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

module.exports = router;
