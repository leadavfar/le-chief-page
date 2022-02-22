const recipe = require("../models/recipe");
const Recipe = require('../models/recipe')
const recipeController = {};

recipeController.getApiRecipes = async (req, res) => {
    const dbData = await Recipe.find();
    return res.status(200).send(dbData)
};

recipeController.postRecipe =  (req, res) => {
    return res.send('post')
};

recipeController.putRecipe =  (req, res) => {
    return res.send('put')
};

recipeController.deleteRecipe =  (req, res) => {
    return res.send('delete')
};


module.exports = recipeController;