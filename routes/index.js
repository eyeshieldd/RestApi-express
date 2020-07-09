const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/user");

router.get("/users", getUser);

router.get("*", function (req, res) {
  res.status(404).send({
    error: "404 Not Found",
  });
});

module.exports = router;
