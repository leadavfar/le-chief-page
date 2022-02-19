const { Schema, model, } = require('mongoose');

/* cada receta debe tener informacion de: Nombre, descripcion, puntaje de sabor y salud, 
 imagen, dietas, precio, creador, pasos con descripcion, ingredientes y herramientas */

const RecipeSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true }/* ,
    price: { type: String, required: true },
    origin: { type: String, required: true },
    steps: { type: String, required: true },
    diets: { type: String, required: true },
    image: { type: String, required: true } */
}, {
    timestamps: true
});

module.exports = model('Recipe', RecipeSchema);