const router = require('express').Router();
const Recipe = require('../models/recipe');

router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    const allCuisines = recipes.map((el) => el.cuisines).flat();
    const cuisines = allCuisines.filter((valor, indice) => {
        return allCuisines.indexOf(valor) === indice;
    });
    return res.status(200).send(cuisines)
});


module.exports = router;