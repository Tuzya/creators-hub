const { threadId } = require('worker_threads');
const express = require('express');
const nodemailer = require('nodemailer');
const { Course, User, CoursesUser, Person } = require('../db/models');
const upload = require('../middleware/multerPdfMiddleware');

const router = express.Router();

router.route('/allcourses').get(async (req, res) => {
  if (req.session.company) {
    try {
      const { id } = req.session.company;
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

router
  .route('/allcourses/:courseId')
  .get(async (req, res) => {
    const id = req.params.courseId;
    const oneCourses = await Course.findByPk(id);
    res.json(oneCourses);
  })
  .delete(async (req, res) => {
    try {
      await Course.destroy({ where: { id: req.params.courseId } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
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
    }
    await course.save();
    return res.json(course);
  });

router.route('/lk/alluser').get(async (req, res) => {
  try {
    const { id } = req.session.company;
    const userProfile = await User.findAll({
      where: { company_id: id },
      include: { model: Person },
    });
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

// router.post('/addcourse', async (req, res) => {
//   const { userId, selectedCourses } = req.body;

//   try {
//     const user = await User.findByPk(userId);
//     const course = await Course.findOne({ where: { id: selectedCourses } });

//     if (!user || !course) {
//       return res
//         .status(404)
//         .json({ error: 'Пользователь или курс не найдены' });
//     }

//     const existingAssignment = await CoursesUser.findOne({
//       where: {
//         user_id: user.id,
//         courses_id: course.id,
//       },
//     });

//     if (existingAssignment) {
//       return res
//         .status(400)
//         .json({ error: 'Курс уже назначен этому пользователю' });
//     }

//     await CoursesUser.create({
//       user_id: user.id,
//       courses_id: course.id,
//       status: false,
//     });

//     // Отправка уведомления на почту
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'projectClockers@gmail.com', // Ваш Gmail email для отправки писем
//         pass: 'inptqckjdmcujkae', // Ваш пароль
//       },
//     });

//     const mailOptions = {
//       from: 'projectClockers@gmail.com', // Ваш email
//       to: user.email, // Почта пользователя
//       subject: 'Уведомление о назначении курса',
//       text: `Здравствуйте, ${user.username}! Вам был назначен курс: ${course.title}.`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Ошибка при отправке уведомления на почту:', error);
//       } else {
//         console.log('Уведомление успешно отправлено:', info.response);
//       }
//     });

//     res.status(200).json({ message: 'Курс успешно назначен пользователю' });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'Произошла ошибка при назначении курса пользователю' });
//   }
// });

router.post('/addcourse', async (req, res) => {
  const { userId, selectedCourses } = req.body;

  try {
    const user = await User.findByPk(userId);

    // Находим все выбранные курсы
    const courses = await Course.findAll({ where: { id: selectedCourses } });

    if (!user || courses.length !== selectedCourses.length) {
      return res.status(404).json({
        error: 'Пользователь или один или несколько курсов не найдены',
      });
    }

    // Проверяем, что ни один из выбранных курсов уже не назначен пользователю
    const existingAssignments = await CoursesUser.findAll({
      where: {
        user_id: user.id,
        courses_id: selectedCourses,
      },
    });

    if (existingAssignments.length > 0) {
      return res.status(400).json({
        error: 'Один или несколько курсов уже назначены этому пользователю',
      });
    }

    // Создаем массив объектов для массового создания назначений курсов
    const assignments = courses.map((course) => ({
      user_id: user.id,
      courses_id: course.id,
      status: false,
    }));

    // Массово создаем назначения курсов
    await CoursesUser.bulkCreate(assignments);

    // Отправка уведомления на почту
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'projectClockers@gmail.com', // Ваш Gmail email для отправки писем
        pass: 'inptqckjdmcujkae', // Ваш пароль
      },
    });

    const mailOptions = {
      from: 'projectClockers@gmail.com', // Ваш email
      to: user.email, // Почта пользователя
      subject: 'Уведомление о назначении курсов',
      text: `Здравствуйте, ${user.username}! Вам были назначены курсы: ${courses
        .map((course) => course.title)
        .join(', ')}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Ошибка при отправке уведомления на почту:', error);
      } else {
        console.log('Уведомление успешно отправлено:', info.response);
      }
    });

    res.status(200).json({ message: 'Курсы успешно назначены пользователю' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Произошла ошибка при назначении курсов пользователю' });
  }
});

module.exports = router;
