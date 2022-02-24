const express = require("express");
const { signup, signin } = require("../controllers/auth");

const router = express.Router();

/* ROUTES

- signin
- signup
- signout

*/

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
