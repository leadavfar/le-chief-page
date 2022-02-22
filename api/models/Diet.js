const { Schema, model } = require('mongoose');

const DietSchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
})


module.exports = model('Diet', DietSchema)