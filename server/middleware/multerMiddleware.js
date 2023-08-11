const multer = require('multer');

const storage = multer.diskStorage({
   destination(req, file, cb) {
      cb(null, 'uploads/'); // Папка, куда будут сохраняться загруженные файлы
   },
   filename(req, file, cb) {
      cb(null, file.originalname); // Имя файла останется таким же, как оригинальное имя
   },
});

const upload = multer({ storage });

module.exports = upload;
