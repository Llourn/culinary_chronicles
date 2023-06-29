import React, { useState } from "react";
import {
  SlButton,
  SlDialog,
  SlDivider,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./RecipeControl.module.css";
import { useMutation } from "@apollo/client";
import { DELETE_RECIPE } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";

const RecipeControl = ({ recipe }) => {
  const [deleteRecipe] = useMutation(DELETE_RECIPE);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  let dirCount = 0;
  let ingCount = 0;

  const handleDeleteRecipe = async () => {
    console.log("DELETE RECIPE", recipe._id);
    try {
      await deleteRecipe({
        variables: { id: recipe._id },
      });
    } catch (err) {
      console.log("There was an error deleting the recipe.", err);
    }

    navigate(0);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={recipe.image} alt="delicious recipe" />
      </div>
      <div className={styles.group}>
        <h2 className={styles.title}>{recipe.name}</h2>
        <div className={styles.buttons}>
          <SlButton variant="primary" outline onClick={() => setOpen(true)}>
            SEE RECIPE
          </SlButton>
          <SlButton
            onClick={() => handleDeleteRecipe()}
            variant="danger"
            outline
          >
            DELETE RECIPE
          </SlButton>
        </div>
      </div>
      <SlDialog
        className={styles.dialog}
        label={recipe.name}
        open={open}
        onSlAfterHide={() => setOpen(false)}
      >
        <img className={styles.dialogImage} alt="recipe" src={recipe.image} />
        <br />
        {`By: ${recipe.firstName} ${recipe.lastName}`}
        <br />
        {recipe.description}
        <SlDivider />
        <h4>Ingredients</h4>
        {recipe.ingredients?.map((ingredient) => (
          <p key={ingredient} className={styles.dialogP}>
            {`${++ingCount}. ${ingredient}`}
          </p>
        ))}
        <SlDivider />
        <h4>Directions</h4>
        {recipe.directions?.map((direction) => (
          <p key={direction} className={styles.dialogP}>
            {`${++dirCount}. ${direction}`}
          </p>
        ))}
        <SlButton slot="footer" variant="dark" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>
    </div>
  );
};

export default RecipeControl;
