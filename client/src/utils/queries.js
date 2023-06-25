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
  {
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
  {
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
  {
    recipeLikes(recipeId: $recipeId)
  }
`;
