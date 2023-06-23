const mongoose = require("mongoose");

const { Schema } = mongoose;

const userRecipeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

const UserRecipeSchema = mongoose.model("User", userRecipeSchema);

module.exports = UserRecipeSchema;
