//const path = require("path");

const express = require("express");

//const rootDir = require("../util/path");

const ContactController = require("../controllers/contact");

const router = express.Router();

router.get("/contactus", ContactController.getContact);

router.post("/contactus", ContactController.postContact);

module.exports = router;
