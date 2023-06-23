import React from "react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";

const Button = ({
  variant = "neutral",
  style,
  handleClick,
  size = "medium",
  children,
}) => {
  return (
    <>
      <SlButton
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
