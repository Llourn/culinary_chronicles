import React, { useState } from "react";
import Card from "../../components/Card";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RECIPES } from "../../utils/queries";
import styles from "./Search.module.css";
import { SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlSpinner } from "@shoelace-style/shoelace/dist/react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState("");
  const { loading, data } = useQuery(QUERY_ALL_RECIPES, {
    variables: { name: searchSubmitted },
    skip: !searchSubmitted,
  });

  const searchRecipes = data?.recipes || [];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchSubmitted(searchInput);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchInput}>
        <SlInput
          className={styles.searchInput}
          label="Search Recipe"
          placeholder="Type Recipe Name"
          size="medium"
          value={searchInput}
          clearable
          onSlInput={handleChange}
        ></SlInput>
        <div className={styles.button}>
          <SlButton variant="primary" type="submit" outline>
            SEARCH
          </SlButton>
        </div>
      </form>
      <div className="container">
        <div className={styles.resultsContainer}>
          {loading ? (
            <SlSpinner
              style={{
                fontSize: "4rem",
                "--indicator-color": "var(--secondary)",
                "--track-width": "6px",
              }}
            />
          ) : searchRecipes.length > 0 ? (
            searchRecipes.map((recipe, index) => {
              return (
                <Card
                  name={recipe?.name}
                  firstName={recipe?.author.firstName}
                  lastName={recipe?.author.lastName}
                  description={recipe?.description}
                  createdAt={recipe?.createdAt}
                  likes={recipe?.likes}
                  ingredients={recipe?.ingredients}
                  directions={recipe?.directions}
                  key={index}
                />
              );
            })
          ) : (
            <p>There are no results to display. 😢</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
