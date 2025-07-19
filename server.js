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
const staticRoutes = require("./routes/static"); // Import static.js routes

/* ***********************
 * Set View Engine and Static Files
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set views directory

/* ***********************
 * Routes
 *************************/
app.use(staticRoutes(app)); // Pass app to static.js for configuration

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
