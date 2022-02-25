const express = require("express");
const { signup, signin, signout } = require("../controllers/auth");

const router = express.Router();

/* ROUTES

- signin
- signup
- signout

*/

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
