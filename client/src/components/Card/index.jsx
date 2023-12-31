import React, { useState } from "react";

import {
  SlButton,
  SlCard,
  SlDialog,
  SlDivider,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./Card.module.css";

const Card = ({
  name,
  firstName,
  lastName,
  description,
  createdAt,
  likes,
  ingredients,
  directions,
  image,
}) => {
  const [open, setOpen] = useState(false);
  let dirCount = 0;
  let ingCount = 0;

  return (
    <SlCard className={styles.cardOverview}>
      <img
        className={styles.dialogImage}
        alt="recipe"
        src={image}
        slot="image"
      />
      <strong>{name}</strong>
      <br />
      <small>{`${firstName} ${lastName}`}</small>
      <br />
      {description}
      <br />
      <small>{createdAt}</small>
      <div slot="footer">
        <SlButton variant="dark" onClick={() => setOpen(true)}>
          SEE RECIPE
        </SlButton>
        <p>{likes}</p>
      </div>
      <SlDialog
        className={styles.dialog}
        label={name}
        open={open}
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
    </SlCard>
  );
};

export default Card;
