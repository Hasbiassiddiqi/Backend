const express = require("express");
const router = express.Router();
const controller = require("../controller/users");
const auth = require("../Middleware/auth");
router.get("/users", controller.getUser);
router.post("/register", controller.register);

module.exports = router;
