const express = require("express");
const router = express.Router();
const invController = require("../controllers/inventoryController");

// Classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// Vehicle detail view
router.get("/detail/:invId", invController.buildByInventoryId);

module.exports = router;
