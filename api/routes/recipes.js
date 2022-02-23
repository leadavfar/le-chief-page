const router = require('express').Router();
const axios = require("axios").default;

const { getApiRecipes, getUsersRecipes, getAllRecipes, postRecipe, putRecipe, deleteRecipe } = require('../controllers/recipes');

router.get('/', function (req, res) {
    res.send("<h1>Aca se vienen las recetas perrito malvado<h1>")
});

router.get('/api-recipes', getApiRecipes);

router.get('/users-recipes', getUsersRecipes);

router.get('/all-recipes', getAllRecipes);

router.post('/post-user-recipe', postRecipe);

router.put('/put-user-recipe/:id', putRecipe);

router.delete('/delete-user-recipe/:id', deleteRecipe);


module.exports = router;