import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES_BY_AUTHOR } from "../../../utils/queries";
import RecipeControl from "../../../components/RecipeControl";
import styles from "./ControlCollection.module.css";

const ControlCollection = ({ userId }) => {
  const { loading, data } = useQuery(QUERY_RECIPES_BY_AUTHOR, {
    variables: { userId: userId },
    skip: !userId,
  });
  console.log("control", userId);
  let recipes;

  if (data) {
    console.log(data);
    recipes = data.recipesByAuthor;
  }

  return loading ? (
    <p>LOADING...</p>
  ) : (
    <div className={styles.recipeContainer}>
      {recipes
        ? recipes.map((recipe, index) => (
            <RecipeControl key={index} name={recipe.name} />
          ))
        : null}
      {recipes
        ? recipes.map((recipe, index) => (
            <RecipeControl key={index} name={recipe.name} />
          ))
        : null}
      {recipes
        ? recipes.map((recipe, index) => (
            <RecipeControl key={index} name={recipe.name} />
          ))
        : null}
    </div>
  );
};

export default ControlCollection;
