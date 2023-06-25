import React, { useState } from "react";
import {
  SlButton,
  SlCard,
  SlRating,
  SlDialog,
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
      <strong>{name}Placeholder</strong>
      <br />
      <small>{`${firstName} ${lastName}`}</small>
      <br />
      {description}
      some description goes here this is just a placeholder dont worry about
      this just taking space to test
      <br />
      <small>{createdAt}Created at placeholder 420:69:10</small>
      <div slot="footer">
        <SlButton variant="dark" onClick={() => setOpen(true)}>
          SEE RECIPE
        </SlButton>
        <p>Total likes: 69{likes}</p>
        {likes}
        <SlRating
          label="Rating"
          getSymbol={() => '<sl-icon name="hand-thumbs-up-fill"></sl-icon>'}
          max={1}
        ></SlRating>
      </div>
      <SlDialog
        label="Recipe"
        open={open}
        style={{ "--width": "50vw" }}
        onSlAfterHide={() => setOpen(false)}
      >
        <strong>{name}Placeholder</strong>
        <br />
        <small>{`${firstName} ${lastName}`}</small>
        <br />
        {description}
        some description goes here this is just a placeholder dont worry about
        this just taking space to test
        <br />
        {ingredients}
        <br />
        {directions}
        <SlButton slot="footer" variant="dark" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>
    </SlCard>
  );
};

export default Card;
