import React, { useState } from "react";
import {
  SlButton,
  SlCard,
  SlRating,
  SlDialog,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./Card.module.css";

import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_BY_ID } from "../utils/queries";

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

  const { data } = useQuery(QUERY_RECIPE_BY_ID);
  let recipe = data?.recipe || {};

  return (
    <SlCard className={styles.cardOverview}>
      <img
        alt="recipe"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        slot="image"
      />
      <strong>{recipe.name}</strong>
      <br />
      <small>{`${author.firstName} ${author.lastName}`}</small>
      <br />
      {recipe.description}
      <br />
      <small>{recipe.createdAt}</small>
      <div slot="footer">
        <SlButton variant="dark" onClick={() => setOpen(true)}>
          SEE RECIPE
        </SlButton>
        <p>{recipe.likes}</p>
      </div>
      <SlDialog
        label="Recipe"
        open={open}
        style={{ "--width": "50vw" }}
        onSlAfterHide={() => setOpen(false)}
      >
        <strong>{recipe.name}</strong>
        <br />
        <small>{`${author.firstName} ${author.lastName}`}</small>
        <br />
        {recipe.description}
        <br />
        {recipe.ingredients.map((ingredient) => (
          <p>{ingredient}</p>
        ))}
        <br />
        {recipe.directions.map((direction) => (
          <p>{direction}</p>
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
