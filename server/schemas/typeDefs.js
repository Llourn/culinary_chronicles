const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Recipe {
    _id: ID
    author: User!
    name: String
    description: String
    prepTime: String
    cookTime: String
    totalTime: String
    servings: Int
    yield: String
    ingredients: [String]
    directions: [String]
    image: String
    tags: [String]
  }

  type LikedRecipe {
    _id: ID
    userID: ID!
    recipeID: ID!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    recipes(name: String, tags: [String]): [Recipe]
    likedRecipes(userId: ID): [Recipe]
    recipeLikes(recipeId: ID): Int
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addRecipe(
      author: ID!
      name: String!
      description: String!
      prepTime: String!
      cookTime: String!
      totalTime: String!
      servings: Int!
      yield: String!
      ingredients: [String]!
      directions: [String]!
      image: String
      tags: [String]!
    ): Recipe
    updateRecipe(
      _id: ID!
      name: String
      description: String
      prepTime: String
      cookTime: String
      totalTime: String
      servings: Int
      yield: String
      ingredients: [String]
      directions: String
      image: String
      tags: [String]
    ): Recipe
    deleteRecipe(_id: ID!): Recipe
    likeRecipe(userId: ID!, recipeId: ID!): LikedRecipe!
  }
`;

module.exports = typeDefs;
