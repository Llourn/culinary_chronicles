import React, { useState } from "react";
import {
  SlButton,
  SlDialog,
  SlDivider,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./RecipeControl.module.css";

const RecipeControl = ({
  name = "Recipe Name",
  firstName = "First Name",
  lastName = "Last Name",
  description = "Description",
  ingredients = ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
  directions = ["Direction 1", "Direction 2", "Direction 3"],
  image = "https://via.placeholder.com/150",
}) => {
  const [open, setOpen] = useState(false);
  let dirCount = 0;
  let ingCount = 0;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt="placeholder" />
      </div>
      <div className={styles.group}>
        <h2 className={styles.title}>{name}</h2>
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
        label={name}
        open={open}
        style={{ "--width": "50vw" }}
        onSlAfterHide={() => setOpen(false)}
      >
        <img className={styles.dialogImage} alt="recipe" src={image} />
        <br />
        {`By: ${firstName} ${lastName}`}
        <br />
        {description}
        <SlDivider />
        <h4>Ingredients</h4>
        {ingredients?.map((ingredient) => (
          <p key={ingredient} className={styles.dialogP}>
            {`${++ingCount}. ${ingredient}`}
          </p>
        ))}
        <SlDivider />
        <h4>Directions</h4>
        {directions?.map((direction) => (
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
