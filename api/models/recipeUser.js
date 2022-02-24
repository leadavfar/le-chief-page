const { Schema, model, } = require('mongoose');

/* cada receta debe tener informacion de: Nombre, descripcion, puntaje de sabor y salud, 
 imagen, dietas, precio, creador, pasos con descripcion, ingredientes y herramientas */

const RecipeUserSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    summary: { type: String, required: true },
    diets: { type: Array, required: true },
    cuisines: { type: Array, required: true },
    steps: { type: Object, required: true },
    price: { type: String, required: true },
    spoonacularScore: { type: String, required: true },
    healthScore: { type: String, required: true },
    origin: { type: String, default: 'User' }
}, {
    timestamps: true
});

module.exports = model('RecipeUser', RecipeUserSchema);