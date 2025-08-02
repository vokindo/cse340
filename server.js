/* ******************************************
 * Primary server file
 ******************************************/

const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Load utilities
const utilities = require("./utilities");

// Load routes
const inventoryRoute = require("./routes/inventoryRoute");

/* ***********************
 * View Engine & Layout
 *************************/
const expressLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layouts/layout"); // This points to views/layouts/layout.ejs

/* ***********************
 * Static Files
 *************************/
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));

/* ***********************
 * Middleware
 *************************/
// Inject navigation into all views
app.use(async (req, res, next) => {
  try {
    res.locals.nav = await utilities.getNav();
  } catch (err) {
    console.error("Failed to load navigation:", err);
    res.locals.nav = "";
  }
  next();
});

/* ***********************
 * Routes
 *************************/
app.use("/inventory", inventoryRoute);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

/* ***********************
 * Server Listener
 *************************/
const port = process.env.PORT || 5500;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
