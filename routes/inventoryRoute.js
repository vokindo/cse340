const express = require("express");
const router = express.Router();
const invController = require("../controllers/inventoryController");

// Route to vehicle detail by ID
router.get("/detail/:invId", invController.buildDetailView);

module.exports = router;
