const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Api1 is running!!!!!!!!!</h1>");
});

module.exports = router;
