/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const path = require("path");
const env = require("dotenv").config();
const app = express();
const expressLayouts = require("express-ejs-layouts");
const inventoryRoute = require("./routes/inventoryRoute");
const utilities = require("./utilities");

/* Set View Engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Layout Support */
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* Static Files */
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));

/* Routes */
app.use("/inventory", inventoryRoute);

// Home Page Route with nav
app.get("/", async function (req, res, next) {
  try {
    const nav = await utilities.getNav();
    res.render("index", {
      title: "Home",
      nav,
    });
  } catch (err) {
    next(err);
  }
});

/* Server Startup */
const port = process.env.PORT || 5500;
const host = process.env.HOST || "localhost";
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
