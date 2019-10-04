const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const originalName  = path.basename(file.originalname, ext);
      const name = originalName.replace(/\s/g, '-')
      cb(
        null,
        `${name}-${Date.now()}${ext}`
      );
    }
  })
};
