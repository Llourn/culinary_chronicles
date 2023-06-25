import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $name: String
    $image: String
    $description: String
    $prepTime: String
    $cookTime: String
    $totalTime: String
    $servings: String
    $yield: String
    $ingredients: [String]
    $directions: [String]
  ) {
    addRecipe(
      name: $name
      image: $image
      description: $description
      prepTime: $prepTime
      cookTime: $cookTime
      totalTime: $totalTime
      servings: $servings
      yield: $yield
      ingredients: $ingredients
      directions: $directions
    ) {
      _id
    }
  }
`;
