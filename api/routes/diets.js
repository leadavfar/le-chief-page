const router = require('express').Router();
const Recipe = require('../models/recipe');

router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    const allDiets = recipes.map((el) => el.diets).flat()
    const diets = allDiets.filter((valor, indice) => {
        return allDiets.indexOf(valor) === indice;
    });
    return res.status(200).send(diets)
});


module.exports = router;