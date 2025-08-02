const express = require("express");
const router = express.Router();

router.get("/trigger-error", (req, res, next) => {
  throw new Error("This is a simulated server error!");
});

module.exports = router;
