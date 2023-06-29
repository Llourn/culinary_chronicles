import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES_BY_AUTHOR } from "../../../utils/queries";
import RecipeControl from "../../../components/RecipeControl";
import styles from "./ControlCollection.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SlSpinner, SlButton } from "@shoelace-style/shoelace/dist/react";

const ControlCollection = ({ userId }) => {
  const { loading, data } = useQuery(QUERY_RECIPES_BY_AUTHOR, {
    variables: { userId: userId },
    skip: !userId,
  });

  const navigate = useNavigate();

  let recipes;

  if (data) {
    recipes = data.recipesByAuthor;
  }

  return (
    <>
      <div className={styles.title}>
        <h2>My Recipes</h2>{" "}
        <SlButton
          variant="primary"
          outline
          onClick={() => navigate("/new-recipe")}
        >
          NEW RECIPE
        </SlButton>
      </div>
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
            <p className={styles.newRecipeCTA}>
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
