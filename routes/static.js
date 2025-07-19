const express = require('express');
const router = express.Router();

// Static file routes for CSS, JS, and images
router.use(express.static("public")); // Serve all static files from the "public" folder
router.use("/css", express.static(__dirname + "/public/css"));
router.use("/js", express.static(__dirname + "/public/js"));
router.use("/images", express.static(__dirname + "/public/images"));

// You can add more custom routes here if needed for handling specific routes
// Example: router.get('/some-custom-route', (req, res) => { res.send('Some response'); });

// Export the router to be used in server.js
module.exports = router;
