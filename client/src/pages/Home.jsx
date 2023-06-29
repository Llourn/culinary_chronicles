import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";
import Card from "../components/Card";
import {
  SlSpinner,
  SlDialog,
  SlDivider,
  SlButton,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./Home.module.css";

const Home = (props) => {
  const [open, setOpen] = useState(false);

  const { loading, data } = useQuery(QUERY_RECIPES);
  let dirCount = 0;
  let ingCount = 0;

  let trendingRecipe;
  let recipeList;
  let mainRecipe;

  if (data) {
    mainRecipe = data?.allRecipes[0];
    trendingRecipe = data?.allRecipes?.slice(1, 3);
    recipeList = data?.allRecipes?.slice(4, 8);
    console.log(data.allRecipes);
  }

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div>
      <div className={styles.hero}>
        <h1>Culinary Chronicles</h1>
        <h3>Recipes That Tell Delicious Stories</h3>
      </div>
      <h3 className="i-pd-1rem">TRENDING</h3>
      {loading ? (
        <SlSpinner
          style={{
            fontSize: "4rem",
            "--indicator-color": "var(--secondary)",
            "--track-width": "6px",
          }}
        />
      ) : (
        <div className={styles.splashContainer}>
          <div
            className={styles.mainSplash}
            style={{ backgroundImage: `url(${mainRecipe.image})` }}
          >
            <h2>{mainRecipe.name}</h2>
            <p>{mainRecipe.description}</p>
            <div className={styles.buttonContainer}>
              <SlButton variant="dark" onClick={() => setOpen(true)}>
                SEE RECIPE
              </SlButton>
            </div>
          </div>
          <div className={styles.sideSplash}>
            {trendingRecipe.map((recipe) => (
              <Card
                key={recipe._id}
                name={recipe.name}
                firstName={recipe.author.firstName}
                lastName={recipe.author.lastName}
                description={recipe.description}
                createdAt={recipe.createdAt}
                likes={recipe.likes}
                ingredients={recipe.ingredients}
                directions={recipe.directions}
                image={recipe.image}
              />
            ))}
          </div>
          <SlDialog
            className={styles.dialog}
            label={mainRecipe.name}
            open={open}
            onSlAfterHide={() => setOpen(false)}
          >
            <img
              className={styles.dialogImage}
              alt="recipe"
              src={mainRecipe.image}
            />
            <br />
            {`By: ${mainRecipe.author.firstName} ${mainRecipe.author.lastName}`}
            <br />
            {mainRecipe.description}
            <SlDivider />
            <h4>Ingredients</h4>
            {mainRecipe.ingredients?.map((ingredient) => (
              <p key={ingredient} className={styles.dialogP}>
                {`${++ingCount}. ${ingredient}`}
              </p>
            ))}
            <SlDivider />
            <h4>Directions</h4>
            {mainRecipe.directions?.map((direction) => (
              <p key={direction} className={styles.dialogP}>
                {`${++dirCount}. ${direction}`}
              </p>
            ))}
            <SlButton
              slot="footer"
              variant="dark"
              onClick={() => setOpen(false)}
            >
              Close
            </SlButton>
          </SlDialog>
        </div>
      )}

      <h3 className="i-pd-1rem">NEW</h3>
      <div className={styles.newRecipeContainer}>
        {loading ? (
          <SlSpinner
            style={{
              fontSize: "4rem",
              "--indicator-color": "var(--secondary)",
              "--track-width": "6px",
            }}
          />
        ) : (
          recipeList.map((recipe) => (
            <Card
              key={recipe._id}
              name={recipe.name}
              firstName={recipe.author.firstName}
              lastName={recipe.author.lastName}
              image={recipe.image}
              description={recipe.description}
              createdAt={recipe.createdAt}
              likes={recipe.likes}
              ingredients={recipe.ingredients}
              directions={recipe.directions}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
