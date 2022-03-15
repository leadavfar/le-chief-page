const router = require('express').Router();
const recipes = require("./recipes.js");
const users = require("./users.js");
const cuisines = require("./cuisines.js")
const diets = require("./diets.js")

router.use("/recipes", recipes)
router.use("/users", users)
router.use("/cuisines", cuisines)
router.use("/diets", diets)

module.exports = router;