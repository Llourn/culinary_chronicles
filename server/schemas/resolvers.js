const { AuthenticationError } = require("apollo-server-express");
const { User, Recipe } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    recipes: async (parent, args) => {
      return await Recipe.find({
        //or operator to find recipes with tags or name
        //if no tags or name, return all recipes
        $or: [{ tags: { $in: args.tags } }, 
              { name: { $regex: args.name } }],
      });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addRecipe: async (parent, args) => {
      return await Recipe.create(args);
    },
    updateRecipe: async (parent, args, context) => {
      if(context.recipes) {
        return await Recipe.findByIdAndUpdate(context.recipes._id, args, {
          new: true,
        });
      }
    },
    deleteRecipe: async (parent, args, context) => {
      if(context.recipes) {
        return await Recipe.findByIdAndDelete(context.recipes._id);
      }
    },
  },
};

module.exports = resolvers;
