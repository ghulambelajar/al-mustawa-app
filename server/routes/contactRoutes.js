const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Perhatikan: Method-nya POST, bukan GET
router.post("/", contactController.submitContact);

module.exports = router;
