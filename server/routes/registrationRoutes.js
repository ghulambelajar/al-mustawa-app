const express = require("express");
const router = express.Router();
const controller = require("../controllers/registrationController");

router.post("/", controller.registerStudent);
router.get("/", controller.getAllRegistrations);
router.get("/export", controller.exportExcel);

module.exports = router;
