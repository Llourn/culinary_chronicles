const mongoose = require("mongoose");

const { Schema } = mongoose;

const likedRecipeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

const LikedRecipe = mongoose.model("LikedRecipe", likedRecipeSchema);

module.exports = LikedRecipe;
