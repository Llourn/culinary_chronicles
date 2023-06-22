import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>This page does not exist</h1>
      <Button handleClick={() => navigate("/")}>HOME</Button>
    </div>
  );
};

export default NoMatch;
