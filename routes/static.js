const express = require('express');
const expressLayouts = require('express-ejs-layouts'); // Assuming you have express-ejs-layouts
const router = express.Router();

// Set up view engine and layout
module.exports = function(app) {
  app.set("view engine", "ejs"); // Set EJS as view engine
  app.use(expressLayouts); // Use express-ejs-layouts
  app.set("layout", "./layouts/layout"); // Set the layout path for EJS layouts

  // Set up static file serving for the public folder
  app.use(express.static("public")); // Serve static files from public directory
  app.use("/css", express.static(__dirname + "/public/css"));
  app.use("/js", express.static(__dirname + "/public/js"));
  app.use("/images", express.static(__dirname + "/public/images"));
};
