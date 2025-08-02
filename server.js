/* ******************************************
 * Primary server file
 ******************************************/

const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Routes
const inventoryRoute = require("./routes/inventoryRoute");

// Utilities
const utilities = require("./utilities");

// Middleware to inject navigation into all views
app.use(async (req, res, next) => {
  try {
    res.locals.nav = await utilities.getNav();
    next();
  } catch (error) {
    console.error("Error loading navigation:", error);
    res.locals.nav = ""; // fallback to empty nav
    next();
  }
});

/* ***********************
 * View Engine & Layout
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Static Files
 *************************/
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));

/* ***********************
 * Routes
 *************************/
app.use("/inventory", inventoryRoute);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home"
  });
});

/* ***********************
 * Server Listener
 *************************/
const port = process.env.PORT || 5500;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
