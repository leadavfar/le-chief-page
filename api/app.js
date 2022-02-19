require('dotenv').config();
require('./database');

const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();
const axios = require("axios").default;
const apk = '5b23f9741e4c42b4b56a00cf331fc75f';
const Recipe = require('./models/recipe');

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?number=3&addRecipeInformation=true&apiKey=" + apk);
    const apiInfo = await apiUrl.data.results.map(el => {
        return {
            title: el.title,
            //id: el.id,
            image: el.image,
            summary: el.summary,
            spoonacularScore: el.spoonacularScore,
            healthScore: el.healthScore,
            diets: el.diets,
            price: el.pricePerServing,
            steps: el.analyzedInstructions.map(el => { return (el.steps.map(el => { return ({ number: el.number, step: el.step, ingredients: el.ingredients.map(el => (el.name)), equipment: el.equipment.map(el => (el.name)) }) })) }).flat()
        };
    });
    return apiInfo;
};

const getAllRecipes = async () => {
    const apiInfo = await getApiInfo();
    return apiInfo;
};

(async function fillDb() {
    const recipes = await getApiInfo();
    recipes.forEach(el => console.log(el.title));
    recipes.forEach(el => new Recipe({ title: el.title, summary: el.summary }).save());

})()

app.use(express.json());
app.use(morgan("dev"));
app.use('/api', routes);

module.exports = app;

