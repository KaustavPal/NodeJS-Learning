const path = require("path");

const rootDir = require("../util/path");

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContact = (req, res, next) => {
  console.log(`Name: ${req.body.name}, Email-id: ${req.body.email}`);
  res.redirect("/success");
  //res.sendFile(path.join(rootDir, "views", "success.html"));
};
