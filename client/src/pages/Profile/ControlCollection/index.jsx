import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_BY_AUTHORS } from "../../../utils/queries";
import RecipeControl from "../../../components/RecipeControl";

const ControlCollection = ({ userId }) => {
  const { loading, data } = useQuery(QUERY_RECIPE_BY_AUTHORS, {
    variables: { name: userId },
    skip: !userId,
  });

  return loading ? <p>LOADING...</p> : <div></div>;
};

export default ControlCollection;
