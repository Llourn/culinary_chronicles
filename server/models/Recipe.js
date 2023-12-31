const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipeSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    prepTime: {
      type: String,
    },
    cookTime: {
      type: String,
    },
    totalTime: {
      type: String,
    },
    servings: {
      type: String,
    },
    yield: {
      type: String,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    directions: [
      {
        type: String,
        required: true,
      },
    ],
    image: {
      type: String,
    },
    tags: [
      {
        type: String,
        options: ["breakfast", "lunch", "dinner", "dessert", "snack", "other"],
      },
    ],
  },
  { timestamps: true } // Allows you to use createdAt and updatedAt, might be useful for sorting
  // createdAt happens as soon as something is created, updatedAt is changed on every save(), updateOne(), updateMany(), findOneAndUpdate(), update(), replaceOne(), and/or bulkWrite());
);
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
