const router = require('express').Router();
const recipes = require("./recipes");
const users = require("./users");

router.use("/recipes", recipes)
router.use("/users", users)

module.exports = router;