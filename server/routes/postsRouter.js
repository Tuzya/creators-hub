const fs = require('fs');
const path = require('path');
const express = require('express');
const sharp = require('sharp');
const { Post } = require('../db/models');
const uploadPost = require('../middleware/multerCarouselMiddleware');

const router = express.Router();

router.route('/posts')
  .get(async (req, res) => {
    try {
      console.log('Getting posts...'); // Добавьте этот лог
      const posts = await Post.findAll();

      res.json(posts);
    } catch (error) {
      console.error('Ошибка выполнения запроса:', error);
      res.status(500).json({ error: 'Произошла ошибка' });
    }
  });

// router.post('/add', CarouselUpload.single('img'), async (req, res) => {
//   const postId = req.session.user.id;

//   const { title, body } = req.body;

//   try {
//     // Проверка существования записи с заданным user_id
//     const existingPost = await Post.create();

//     let image = existingPost ? existingPost.img : ''; // Сохраняем текущее значение фото

//     if (req.file) {
//       const outputBuffer = req.file.buffer;
//       const imageExtension = path.extname(req.file.originalname);
//       image = `${Date.now()}${imageExtension}`;

//       if (imageExtension.toLowerCase() !== '.webp') {
//         const convertedBuffer = await sharp(req.file.buffer).webp().toBuffer();
//         image = `${Date.now()}.webp`;
//         await fs.promises.writeFile(
//           path.join(__dirname, '..', 'public', 'post', image),
//           convertedBuffer,
//         );
//       } else {
//         await fs.promises.writeFile(
//           path.join(__dirname, '..', 'public', 'post', image),
//           outputBuffer,
//         );
//       }
//     }

//     if (existingPost) {
//       // Если запись существует, обновляем только нужные поля
//       existingPost.title = title !== 'undefined' ? title : existingPost.title;
//       existingPost.body = body !== 'undefined' ? body : existingPost.body;
//       existingPost.img = image || existingPost.img;
//       await existingPost.save();
//       res.status(200).json({ message: 'Record updated successfully' });
//     } else {
//       // Если записи нет, создаем новую запись
//       await Post.create({
//         title: title !== 'undefined' ? title : '',
//         body: body !== 'undefined' ? body : '',
//         img: image,
//         // company_id: id,
//       });
//       res.status(200).json({ message: 'Record created successfully' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });

router.delete('/posts/:id', async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.post('/add', uploadPost.single('img'), async (req, res) => {
  try {
    // console.log('petushari', req.body.title);

    if (!req.file) {
      res.status(400).json({ message: 'File not found' });
      return;
    }
    const names = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.promises.writeFile(
      path.join(__dirname, '..', 'public', 'img', names),
      outputBuffer,
    );
    const imgPath = `/img/${names}`;
    const { title, body } = req.body;
    const tee = await Post.create({
      title,
      body,
      img: imgPath,
      companie_id: req.session.company.id,
    });
    res.json(tee);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
