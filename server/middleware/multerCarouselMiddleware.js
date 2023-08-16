const path = require('path'); // Import the path module
const multer = require('multer');

const storage = multer.diskStorage({
   destination(req, file, cb) {
      cb(null, path.join(__dirname, '..', 'public', 'post')); // Use path.join to create a relative path
   },
   filename(req, file, cb) {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${file.fieldname}-${uniqueSuffix}`);
   },
});
const uploadPost = multer({
   storage: multer.memoryStorage(),
   limits: { fileSize: 10 * 1024 * 1024 }, // Максимальный размер файла
   fileFilter: (req, file, cb) => {
      if (file.mimetype.includes('image')) {
         cb(null, true);
      } else {
         cb(null, false);
      }
   },
});

module.exports = uploadPost;
