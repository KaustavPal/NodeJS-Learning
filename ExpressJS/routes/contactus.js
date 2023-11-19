const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/success", (req, res, next) => {
  console.log(`Name: ${req.body.name}, Email-id: ${req.body.email}`);
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
