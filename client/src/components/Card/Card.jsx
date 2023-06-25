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
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>{props.title}</strong>
      <br />
      {props.description}
      <br />
      <small>{timeCreated}</small>
      <div slot="footer">
        <SlButton variant="dark">SEE RECIPE</SlButton>
      </div>
    </SlCard>
  );
};

export default Card;
