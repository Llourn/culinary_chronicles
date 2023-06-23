const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
    },
    prepTime: {
        type: String,
        required: true,
    },
    cookTime: {
        type: String,
        required: true,
    },
    totalTime: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    yield: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    directions: {
        type: String,
        required: true,
        minlength: 10,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    tags: [{
        type: String,
        required: true,
        default: 'other',
        options: ['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'other']
    }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;