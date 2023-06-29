import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      bannerUrl
      bio
      profilePicUrl
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query Query($userId: ID) {
    userById(userId: $userId) {
      _id
      firstName
      lastName
      bio
      profilePicUrl
      bannerUrl
    }
  }
`;

export const QUERY_USERS_LIKED_RECIPES = gql`
  query Query($userId: ID) {
    likedRecipes(userId: $userId) {
      _id
      author {
        _id
        firstName
        lastName
      }
      name
      description
      image
    }
  }
`;

export const QUERY_RECIPE_LIKE_COUNT = gql`
  query Query($recipeId: ID) {
    recipeLikes(recipeId: $recipeId)
  }
`;

export const QUERY_RECIPE_BY_ID = gql`
  query RecipeById($recipeId: ID) {
    recipeById(recipeId: $recipeId) {
      author {
        _id
        firstName
        lastName
      }
      name
      description
      prepTime
      cookTime
      totalTime
      servings
      yield
      ingredients
      directions
      image
      tags
    }
  }
`;

export const QUERY_ALL_RECIPES = gql`
  query Query($name: String) {
    recipes(name: $name) {
      _id
      author {
        _id
        firstName
        lastName
      }
      name
      description
      prepTime
      cookTime
      totalTime
      servings
      yield
      ingredients
      directions
      image
      tags
    }
  }
`;

export const QUERY_RECIPES = gql`
  query Query {
    allRecipes {
      _id
      author {
        _id
        firstName
        lastName
        email
        bio
        profilePicUrl
        bannerUrl
      }
      name
      description
      prepTime
      cookTime
      totalTime
      servings
      yield
      ingredients
      directions
      image
      tags
    }
  }
`;
