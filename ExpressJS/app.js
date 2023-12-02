const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

//const rootDir = require("./util/path");
const error404Controller = require("./controllers/404");
const db = require("./util/dayabase");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactusRoutes = require("./routes/contactus");
const successRoutes = require("./routes/success");

db.execute("SELECT * FROM products");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(successRoutes);

app.use(error404Controller.error404);

app.listen(3000);
