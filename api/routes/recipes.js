const router = require('express').Router();
const axios = require("axios").default;
const apk = '5b23f9741e4c42b4b56a00cf331fc75f';

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?number=1&addRecipeInformation=true&apiKey=" + apk);
    const apiInfo = await apiUrl.data.results.map(el => {
        return {
            title: el.title,
            id: el.id,
            image: el.image,
            summary: el.summary,
            spoonacularScore: el.spoonacularScore,
            healthScore: el.healthScore,
            diets: el.diets,
            price: el.pricePerServing,
            steps: el.analyzedInstructions.map(el => { return (el.steps.map(el => { return ({ number: el.number, step: el.step, ingredients: el.ingredients.map(el => (el.name)), equipment: el.equipment.map(el => (el.name))}) })) }).flat()
        };
    });
    return apiInfo;
};

const getAllRecipes = async () => {
    const apiInfo = await getApiInfo();
    return apiInfo;
};

router.get('/', function (req, res) {
    res.send("<h1>Aca se vienen las recetas perrito malvado<h1>")
});

router.get('/all', async (req, res) => {
    const totalRecipes = await getAllRecipes();
    res.send(totalRecipes);
})

module.exports = router;