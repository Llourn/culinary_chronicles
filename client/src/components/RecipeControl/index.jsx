import React from "react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import styles from "./RecipeControl.module.css";

const RecipeControl = (Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </div>
      <div className={styles.group}>
        <h2 className={styles.title}>{Props.name}Placeholder</h2>
        <div className={styles.buttons}>
          <SlButton variant="primary" outline>
            SEE RECIPE
          </SlButton>
          <SlButton variant="primary" outline>
            EDIT RECIPE
          </SlButton>
          <SlButton variant="danger" outline>
            DELETE RECIPE
          </SlButton>
        </div>
      </div>
    </div>
  );
};

export default RecipeControl;
