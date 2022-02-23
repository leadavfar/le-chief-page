const Recipe = require('../models/recipe');
const RecipeUser = require('../models/recipeUser');
const recipeController = {};

recipeController.getApiRecipes = async (req, res) => {
    const apiRecipes = await Recipe.find();
    return res.status(200).send(apiRecipes)
};

recipeController.getUsersRecipes = async (req, res) => {
    const userRecipes = await RecipeUser.find();
    return res.status(200).send(userRecipes)
};

recipeController.getAllRecipes = async (req, res) => {
    const apiRecipes = await Recipe.find();
    const userRecipes = await RecipeUser.find();
    const allRecipes = apiRecipes.concat(userRecipes);
    return res.status(200).send(allRecipes)
};

recipeController.postRecipe = async (req, res) => {
    const { title, image, summary, diets, steps, price, spoonacularScore, healthScore } = req.body;
    const newRecipeUser = new RecipeUser({ title, image, summary, diets, steps, price, spoonacularScore, healthScore });
    await newRecipeUser.save();
    return res.status(200).send('Recipe posted');
};

recipeController.putRecipe = async (req, res) => {
    const { title, image, summary, diets, steps, price, spoonacularScore, healthScore } = req.body;
    await RecipeUser.findByIdAndUpdate(req.params.id, { title, image, summary, diets, steps, price, spoonacularScore, healthScore })
    return res.send('Recipe updated')
};

recipeController.deleteRecipe = async (req, res) => {
    await RecipeUser.findByIdAndDelete(req.params.id);
    return res.send('Recipe deleted')
};


module.exports = recipeController;