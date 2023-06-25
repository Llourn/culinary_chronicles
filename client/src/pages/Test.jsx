import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_BY_ID } from "../utils/queries";
import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Test = () => {
  const recipeId = "6498896d9b5208d7dabad308";
  const { loading, data } = useQuery(QUERY_RECIPE_BY_ID, {
    variables: { recipeId },
  });
  let recipe;

  if (data) {
    recipe = data.recipeById;
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
        <p>{recipe.name}</p>
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
