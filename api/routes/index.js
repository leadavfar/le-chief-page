const router = require('express').Router();
const recipes = require("./recipes.js");
const users = require("./users.js");

router.use("/recipes", recipes)
router.use("/users", users)

module.exports = router;