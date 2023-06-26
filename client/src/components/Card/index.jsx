import React, { useState } from "react";

import {
  SlButton,
  SlCard,
  SlRating,
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
}) => {
  const [open, setOpen] = useState(false);
  let dirCount = 0;
  let ingCount = 0;

  return (
    <SlCard className={styles.cardOverview}>
      <img
        alt="recipe"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
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
        style={{ "--width": "50vw" }}
        onSlAfterHide={() => setOpen(false)}
      >
        <img
          className={styles.dialogImage}
          alt="recipe"
          src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        />
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
        {/* this was for liking the recipe, currently killed because Lorne said so
        <SlRating
          label="Rating"
          getSymbol={() => '<sl-icon name="hand-thumbs-up-fill"></sl-icon>'}
          max={1}
        ></SlRating> */}
        <SlButton slot="footer" variant="dark" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>
    </SlCard>
  );
};

export default Card;
