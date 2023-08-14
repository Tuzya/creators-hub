const { fs } = require('fs');
const path = require('path');
const sharp = require('sharp');

const express = require('express');
const { Person } = require('../db/models');
const fileUpload = require('../middleware/multerWebMiddleware');

const router = express.Router();

router.get('/person', async (req, res) => {
  const { id } = req.session.user;
  try {
    const user = await Person.findOne({
      where: { user_id: id },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      console.log('User not found');
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.sendStatus(500);
  }
});

router.get('/personInfo/:profileId', async (req, res) => {
  console.log(req.params);
  const { profileId } = req.params;
  console.log('Received profileId:', profileId);
  try {
    const user = await Person.findOne({
      where: { user_id: profileId },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      console.log('User not found');
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.sendStatus(500);
  }
});
router.post('/edit', fileUpload.single('photo'), async (req, res) => {
  const { id } = req.session.user;
  console.log('ghbhghbhbg', req.body);
  const {
    city, birthDate, phone, about, companies, sex,
  } = req.body;
  console.log(sex);
  console.log(req.file);
  if (req.file) {
    const outputBuffer = req.file.buffer;
    const imageExtension = path.extname(req.file.originalname);
    let image = `${Date.now()}${imageExtension}`;

    // Если изображение не в формате .webp, конвертировать
    if (imageExtension.toLowerCase() !== '.webp') {
      const convertedBuffer = await sharp(req.file.buffer).webp().toBuffer();
      image = `${Date.now()}.webp`;
      await fs.promises.writeFile(
        path.join(__dirname, '..', 'public', 'img', image),
        convertedBuffer,
      );
    } else {
      await fs.promises.writeFile(
        path.join(__dirname, '..', 'public', 'img', image),
        outputBuffer,
      );
    }

    console.log(image);



    console.log(image);
    const [updatedRowsCount, updatedRows] = await Person.create(
      // Объект данных для обновления/вставки
      {
        city,
        birthDate,
        phone,
        about,
        companies,
        sex,
        photo: image,
        user_id: id,
      },
      // Опции
      {
        returning: true, // Получить обновленные данные
      },
    );

    if (updatedRowsCount > 0) {
      const updatedUser = updatedRows[0]; // Обновленные данные пользователя
      res.status(200).json(updatedUser);
    } else {
      res.status(400).json({ message: 'Ошибка при оновления данных user.' });
    }
  }
});

module.exports = router;