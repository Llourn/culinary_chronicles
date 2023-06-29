import React, { useState } from "react";
import {
  SlButton,
  SlDialog,
  SlDivider,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./RecipeControl.module.css";

const RecipeControl = ({ recipe }) => {
  const [open, setOpen] = useState(false);
  let dirCount = 0;
  let ingCount = 0;

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
          <SlButton variant="danger" outline>
            DELETE RECIPE
          </SlButton>
        </div>
      </div>
      <SlDialog
        className={styles.dialog}
        label={recipe.name}
        open={open}
        style={{ "--width": "50vw" }}
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
