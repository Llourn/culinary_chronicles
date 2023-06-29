import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES_BY_AUTHOR } from "../../../utils/queries";
import RecipeControl from "../../../components/RecipeControl";
import styles from "./ControlCollection.module.css";
import { Link } from "react-router-dom";
import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

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

  return (
    <>
      <h2 className={styles.title}>My Recipes</h2>
      {loading ? (
        <div className={styles.pageSpinner}>
          <SlSpinner
            style={{
              fontSize: "4rem",
              "--indicator-color": "var(--secondary)",
              "--track-width": "6px",
            }}
          />
        </div>
      ) : (
        <div className={styles.recipeContainer}>
          {recipes?.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeControl key={index} recipe={recipe} />
            ))
          ) : (
            <p>
              You don't seem to have any recipes,{" "}
              <Link to="/new-recipe">why don't you try making one?</Link>
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ControlCollection;
