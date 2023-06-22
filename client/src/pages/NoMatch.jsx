import React from "react";
import Button from "../components/Button";

const homeBtn= {variant: "neutral" ,
style: {margin: "2 rem"},
onClick: "handleclick and go to Home page",
size: "medium",
href: "",
btnLabel:"HOME"
};

const NoMatch = () => {
  //console.log("not found");
  return (
    <div  className="container">
      <h1 >This page does not exist</h1>
      <Button style={homeBtn.style} 
             size={homeBtn.size} variant={homeBtn.variant} 
             onclick={homeBtn.handleClick} href={homeBtn.href}>HOME</Button>
    </div>
  );
};

export default NoMatch;
