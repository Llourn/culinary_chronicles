import React from "react";
import Card from "../components/Card/index";
import { useQuery } from "@apollo/client";
import { QUERY_USERS_LIKED_RECIPES } from "../utils/queries";
import { QUERY_RECIPE_BY_ID } from "../utils/queries";

const Test = () => {
  const recipeId = "64972598862c5bac379b4a2b";
  const userId = "6498896d9b5208d7dabad300";
  const { loading, data } = useQuery(QUERY_RECIPE_BY_ID, {
    variables: { recipeId: recipeId },
  });
  let recipes;

  if (data) {
    // console.log(data);
    console.log(data.recipeById);
    // // recipes = data.likedRecipes;
    // console.log(recipes);
    recipes = data.recipeById;
  }

  return data ? (
    <div>
      <Card
        name={recipes?.name}
        firstName={recipes?.author.firstName}
        lastName={recipes?.author.lastName}
        description={recipes?.description}
        createdAt={recipes?.createdAt}
        likes={recipes?.likes}
        ingredients={recipes?.ingredients}
        directions={recipes?.directions}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Test;
