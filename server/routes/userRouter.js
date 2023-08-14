/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { User } = require('../db/models');

const router = express.Router();

// router.post('/signup', async (req, res) => {
//   console.log(req.body);
//   const { username, email, password } = req.body;
//
//   if (username && email && password) {
//     try {
//       const [user, created] = await User.findOrCreate({
//         where: { email },
//         defaults: { username, password: await bcrypt.hash(password, 10) },
//       });
//       if (!created) return res.sendStatus(401);

//       return res.json(user);
//     } catch (e) {
//       console.log(e);
//       return res.sendStatus(500);
//     }
//   }
//   return res.sendStatus(500);
// });
async function generateRandomPasswordAndHash(length = 10) {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return {
    password,
    hashedPassword,
  };
}

router.post('/signup', async (req, res) => {
  const { username, email } = req.body;

  if (username && email) {
    try {
      // Генерация пароля и хеширование
      const { password, hashedPassword } =
        await generateRandomPasswordAndHash();

      // Поиск или создание пользователя с хешированным паролем
      const [user, created] = await User.findOrCreate({
        where: { email },
        company_id: req.session.user.id,
        defaults: {
          username,
          password: hashedPassword,
        },
      });

      if (!created) {
        return res.sendStatus(401);
      }

      // Отправка письма с учетными данными
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Используем сервис Gmail для отправки писем
        auth: {
          user: 'projectClockers@gmail.com', // Ваш Gmail email для отправки писем
          pass: 'inptqckjdmcujkae', // Пароль от вашего Gmail email
        },
      });
      const mailOptions = {
        from: 'projectClockers@gmail.com',
        to: email,
        subject: 'Добро пожаловать на ваше приложение',
        text: `Ваши учетные данные:\nИмя пользователя: ${username}\nПароль: ${password}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Ошибка отправки письма:', error);
        } else {
          console.log('Письмо отправлено:', info.response);
        }
      });

      return res.json(created);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(500);
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // console.log('заходит в ручку');
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });

      // if (!(await bcrypt.compare(password, user.password))) {
      //   console.log('asd', user);
      //   return res.status(401).json({ message: 'Не прошёл проверку пароля' });
      // }
      console.log('user', user);
      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      delete sessionUser.company_id;
      req.session.user = sessionUser;

      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
