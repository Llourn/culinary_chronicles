import React, { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className="container">
      <h1>This is home</h1>
    </div>
  );
};

export default Home;
