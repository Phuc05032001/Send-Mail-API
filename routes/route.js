const router = require("express").Router();

const { signup, comment } = require("../controller/appController.js");

/** HTTP Reqeust */
router.post("/user/signup", signup);
router.get("/post/comment", comment);

module.exports = router;
