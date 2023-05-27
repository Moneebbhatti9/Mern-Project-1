const express = require("express");
const router = express.Router();
const {userData }= require("../Controllers/userData");

router.post("/", userData);

module.exports = router