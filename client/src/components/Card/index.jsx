import React from "react";
import {
  SlButton,
  SlCard,
  SlRating,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <SlCard className={styles.cardOverview}>
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="Card image"
      />
      <strong>{props.name}Placeholder</strong>
      <br />
      <small>{`${props.firstName} ${props.lastName}`}</small>
      <br />
      {props.description}
      some description goes here this is just a placeholder dont worry about
      this just taking space to test
      <br />
      <small>{props.createdAt}Created at placeholder 420:69:10</small>
      <div slot="footer">
        <SlButton variant="dark" onClick={props.viewRecipe}>
          SEE RECIPE
        </SlButton>
        <p>Total likes: 69{props.likes}</p>
        {props.likes}
        <SlRating
          label="Rating"
          getSymbol={() => '<sl-icon name="hand-thumbs-up-fill"></sl-icon>'}
          max={1}
        ></SlRating>
      </div>
    </SlCard>
  );
};

export default Card;
