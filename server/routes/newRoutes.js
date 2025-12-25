const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);

router.post("/", upload.single("image"), newsController.createNews);
router.delete("/:id", newsController.deleteNews);

module.exports = router;
