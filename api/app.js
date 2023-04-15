require('dotenv').config();
require('./database');
require('dotenv');

const cors = require('cors')
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();
const axios = require("axios").default;
const apk = process.env.API_KEY;
const Recipe = require('./models/recipe');
const RecipeUser = require('./models/recipeUser');
const { db } = require('./models/recipe');

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?number=60&addRecipeInformation=true&apiKey=" + apk);
    const apiInfo = await apiUrl.data.results.map(el => {
        return {
            title: el.title,
            //id: el.id,
            image: el.image,
            summary: el.summary,
            spoonacularScore: el.spoonacularScore,
            healthScore: el.healthScore,
            diets: el.diets,
            cuisines: el.cuisines,
            price: el.pricePerServing,
            steps: el.analyzedInstructions.map(el => { return (el.steps.map(el => { return ({ number: el.number, step: el.step, ingredients: el.ingredients.map(el => (el.name)), equipment: el.equipment.map(el => (el.name)) }) })) }).flat()
        };
    });
    return apiInfo;
};

/* price: { type: String, required: true },
    origin: { type: String, default:'Data Base' },
    steps: { type: String, required: true },
    diets: { type: String, required: true },
    image: { type: String, required: true } 
    spoonacularScore: { type: String, required: true },
    healthScore*/

/*     work */

(async function fillDb() {
    recipesInDataBase = await Recipe.find();
    if (recipesInDataBase.length < 59) {
        const recipes = await getApiInfo();
        recipes.forEach(el => new Recipe({
            title: el.title, image: el.image, summary: el.summary, steps: el.steps,
            diets: el.diets, cuisines: el.cuisines, spoonacularScore: el.spoonacularScore,
            healthScore: el.healthScore, price: el.price, origin: el.origin
        }).save());
    }
})()

app.use(express.json());
app.use(cors())
app.use('/', routes);

module.exports = app;