const express = require("express");
const { signup } = require("../controllers/auth");

const router = express.Router();

/* ROUTES

- signin
- signup
- signout

*/

router.post("/signup", signup);

module.exports = router;
