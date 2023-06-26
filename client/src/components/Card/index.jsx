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
        label="Recipe"
        open={open}
        style={{ "--width": "50vw" }}
        onSlAfterHide={() => setOpen(false)}
      >
        <strong>{name}</strong>
        <br />
        <small>{`${firstName} ${lastName}`}</small>
        <br />
        {description}
        <SlDivider />
        {ingredients?.map((ingredient) => (
          <p key={ingredient}>
            <br />
            {ingredient}
          </p>
        ))}
        <SlDivider />
        {directions?.map((direction) => (
          <p key={direction}>
            <br />
            {direction}
          </p>
        ))}
        <SlRating
          label="Rating"
          getSymbol={() => '<sl-icon name="hand-thumbs-up-fill"></sl-icon>'}
          max={1}
        ></SlRating>
        <SlButton slot="footer" variant="dark" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>
    </SlCard>
  );
};

export default Card;
