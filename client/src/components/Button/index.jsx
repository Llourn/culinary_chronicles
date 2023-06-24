import React from "react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import styles from "./Button.module.css";

const Button = ({
  variant = "primary",
  style,
  handleClick,
  size = "medium",
  children,
}) => {
  return (
    <>
      <SlButton
        className={styles.btn}
        variant={variant}
        style={style}
        onClick={handleClick}
        size={size}
        outline
      >
        {children}
      </SlButton>
    </>
  );
};

export default Button;
