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
const inventoryRoute = require("./routes/inventoryRoute");
app.use("/inventory", inventoryRoute);


/* ***********************
 * Set View Engine and Static Files
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set views directory

/* ***********************
 * Static File Configuration
 *************************/
// Static file routes (CSS, JS, images)
app.use(express.static("public")); // Serve static files from the public directory
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));

/* ***********************
 * Routes
 *************************/
// Index route
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500;
const host = process.env.HOST || "localhost";

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});



const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts); // Use express-ejs-layouts
app.set("layout", "./layouts/layout"); // Set the layout file path
