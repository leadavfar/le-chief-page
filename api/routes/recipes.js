const router = require('express').Router();
const axios = require("axios").default;

const { getApiRecipes, postRecipe, putRecipe, deleteRecipe } = require('../controllers/recipes');

router.get('/', function (req, res) {
    res.send("<h1>Aca se vienen las recetas perrito malvado<h1>")
});

router.get('/api-recipes', getApiRecipes);

router.post('/post-recipe', postRecipe);

router.put('/put-recipe', putRecipe);

router.delete('/delete-recipe', deleteRecipe);


module.exports = router;