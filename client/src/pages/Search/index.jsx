import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RECIPES} from "../../utils/queries"
import styles from "./Search.module.css";
import { SlIcon, SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlSpinner } from '@shoelace-style/shoelace/dist/react';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState('');
  const {loading, data} = useQuery( QUERY_ALL_RECIPES,{
         variables:{name: searchSubmitted},
         skip: !searchSubmitted
      });
      console.log(data);
const searchRecipies = data?.recipes || []
console.log(searchRecipies);
   const handleSubmit = (event) =>{
    event.preventDefault()
    setSearchSubmitted(searchInput) 
    setSearchInput("")
   };
  
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value)
  };

  return (
    <>
      <div className={styles.text}>
        <SlButton variant="text" size="small">
          BREAKFAST
        </SlButton>
        <SlButton variant="text" size="small">
          DINNER
        </SlButton>
        <SlButton variant="text" size="small">
          DRINKS
        </SlButton>
        <br />
        <SlButton variant="text" size="small">
          LUNCH
        </SlButton>
        <SlButton variant="text" size="small">
          DESSERT
        </SlButton>
      </div>
      <SlInput
        className={styles.labelOnLeft}
        label="SEARCH RECIPIE"
        placeholder="Type Recipie Name"
        size="small"
        value={searchInput}
        clearable
         onSlInput={handleChange}
      ></SlInput>
      <div className={styles.onRight}>
        <SlButton variant="primary" onClick={handleSubmit} type="submit" outline>
          SEARCH
        </SlButton>
      </div>

      {searchRecipies.map((recipie) => {
      return (<div className="container">
         <Card
            name={recipie?.name}
            firstName = {recipie?.author.firstName}
              lastName = {recipie?.author.lastName}
             description = { recipie?.description}
              createdAt={recipie?.createdAt}
              likes ={recipie?.likes}
              ingredients={recipie?.ingredients}
              directions = {recipie?.directions}
            />
            </div>
            )})}
            
              {/* <div onClick={handleSubmit}>Loading...
              <SlSpinner />
              </div>  */}
    </>
  );
};

export default Search;