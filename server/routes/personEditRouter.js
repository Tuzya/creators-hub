const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const express = require('express');
const { Person } = require('../db/models');
const fileUpload = require('../middleware/multerWebMiddleware');

const router = express.Router();

router.get('/personFindOne', async (req, res) => {
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

// старый рабочий
// router.post('/edit', fileUpload.single('photo'), async (req, res) => {
//   const { id } = req.session.user;
//   const { city, birthDate, phone, about, companies, sex } = req.body;

//   try {
//     // Проверка существования записи с заданным user_id
//     const existingPerson = await Person.findOne({
//       where: { user_id: id },
//     });

//     let image = existingPerson.photo; // Сохраняем текущее значение фото

//     if (req.file) {
//       const outputBuffer = req.file.buffer;
//       const imageExtension = path.extname(req.file.originalname);
//       image = `${Date.now()}${imageExtension}`;

//       if (imageExtension.toLowerCase() !== '.webp') {
//         const convertedBuffer = await sharp(req.file.buffer).webp().toBuffer();
//         image = `${Date.now()}.webp`;
//         await fs.promises.writeFile(
//           path.join(__dirname, '..', 'public', 'img', image),
//           convertedBuffer
//         );
//       } else {
//         await fs.promises.writeFile(
//           path.join(__dirname, '..', 'public', 'img', image),
//           outputBuffer
//         );
//       }
//     }

//     if (existingPerson) {
//       // Если запись существует, обновляем только нужные поля
//       existingPerson.city = city || existingPerson.city;
//       existingPerson.birthDate = birthDate || existingPerson.birthDate;
//       existingPerson.phone = phone || existingPerson.phone;
//       existingPerson.about = about || existingPerson.about;
//       existingPerson.companies = companies || existingPerson.companies;
//       existingPerson.sex = sex || existingPerson.sex;
//       existingPerson.photo = image || existingPerson.photo;
//       await existingPerson.save();
//       res.status(200).json({ message: 'Record updated successfully' });
//     } else {
//       // Если записи нет, создаем новую запись
//       await Person.create({
//         city,
//         birthDate,
//         phone,
//         about,
//         companies,
//         sex,
//         photo: image,
//         user_id: id,
//       });
//       res.status(200).json({ message: 'Record created successfully' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });

router.post('/edit', fileUpload.single('photo'), async (req, res) => {
  const { id } = req.session.user;
  const { city, birthDate, phone, about, companies, sex } = req.body;

  try {
    // Проверка существования записи с заданным user_id
    const existingPerson = await Person.findOne({
      where: { user_id: id },
    });

    let image = existingPerson ? existingPerson.photo : ''; // Сохраняем текущее значение фото

    if (req.file) {
      const outputBuffer = req.file.buffer;
      const imageExtension = path.extname(req.file.originalname);
      image = `${Date.now()}${imageExtension}`;

      if (imageExtension.toLowerCase() !== '.webp') {
        const convertedBuffer = await sharp(req.file.buffer).webp().toBuffer();
        image = `${Date.now()}.webp`;
        await fs.promises.writeFile(
          path.join(__dirname, '..', 'public', 'img', image),
          convertedBuffer
        );
      } else {
        await fs.promises.writeFile(
          path.join(__dirname, '..', 'public', 'img', image),
          outputBuffer
        );
      }
    }

    if (existingPerson) {
      // Если запись существует, обновляем только нужные поля
      existingPerson.city = city !== 'undefined' ? city : existingPerson.city;
      existingPerson.birthDate =
        birthDate !== 'undefined' ? birthDate : existingPerson.birthDate;
      existingPerson.phone =
        phone !== 'undefined' ? phone : existingPerson.phone;
      existingPerson.about =
        about !== 'undefined' ? about : existingPerson.about;
      existingPerson.companies =
        companies !== 'undefined' ? companies : existingPerson.companies;
      existingPerson.sex = sex !== 'undefined' ? sex : existingPerson.sex;
      existingPerson.photo = image || existingPerson.photo;
      await existingPerson.save();
      res.status(200).json({ message: 'Record updated successfully' });
    } else {
      // Если записи нет, создаем новую запись
      await Person.create({
        city: city !== 'undefined' ? city : '',
        birthDate: birthDate !== 'undefined' ? birthDate : '',
        phone: phone !== 'undefined' ? phone : '',
        about: about !== 'undefined' ? about : '',
        companies: companies !== 'undefined' ? companies : '',
        sex: sex !== 'undefined' ? sex : '',
        photo: image,
        user_id: id,
      });
      res.status(200).json({ message: 'Record created successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});
// новы если ""undefined"" записывает в бд пустую строку

module.exports = router;
