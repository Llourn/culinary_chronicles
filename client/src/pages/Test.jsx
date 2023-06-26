import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS_LIKED_RECIPES } from "../utils/queries";
import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

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
      {loading ? (
        <SlSpinner
          style={{
            fontSize: "3rem",
            "--track-width": "6px",
            "--indicator-color": "deeppink",
            "--track-color": "pink",
          }}
        />
      ) : (
        <p>{JSON.stringify(recipes)}</p>
      )}
      <h1>Test</h1>
      <SlSpinner
        style={{
          fontSize: "3rem",
          "--track-width": "6px",
          "--indicator-color": "deeppink",
          "--track-color": "pink",
        }}
      />
    </div>
  );
};

export default Test;
