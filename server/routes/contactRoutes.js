const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// POST not GET
router.post("/", contactController.submitContact);

module.exports = router;
