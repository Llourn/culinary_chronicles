import React from "react";
import Button from "../components/Button";
const Test = () => {
  return (
    <div className="container">
      <Button>Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
    </div>
  );
};

export default Test;
