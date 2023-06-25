import React from "react";
import Card from "../components/Card/index";

const Test = () => {
  const recipeId = "6498896d9b5208d7dabad308";
  const userId = "6498896d9b5208d7dabad300";
  const { loading, data } = useQuery(QUERY_USERS_LIKED_RECIPES, {
    variables: { userId },
  });
  let recipes;

  if (data) {
    console.log(data);
    recipes = data.likedRecipes;
    console.log(recipes);
  }

  return (
    <div>
      <Card />
    </div>
  );
};

export default Test;
