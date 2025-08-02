const express = require("express");
const router = express.Router();
const invController = require("../controllers/inventoryController");

// Detail view route
router.get("/detail/:inv_id", invController.buildByInventoryId);

module.exports = router;
