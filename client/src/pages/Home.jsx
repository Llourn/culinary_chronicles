import React, { useEffect } from "react";
import NewRecipe from "./NewRecipe";
import { __Directive } from "graphql";
import { useQuery } from "@apollo/client";
import {QUERY_RECIPES} from "../utils/queries";
import Card from "../components/Card";

const Home = (props) => {
  const {loading, data } = useQuery(QUERY_RECIPES);
  console.log(data);
  const trendingRecipe = data?.recipes.slice(0,4) || [];
  
  const recipeList = data?.recipes.slice(4,8) || [];

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <>
    <h4 className="i-pd-1rem" >
      TRENDING
    </h4>
    <ul className="card-grid">
      {trendingRecipe.map(recipes => (
        <li className="list-group-recipe" key={recipes._id}>
          <Card 
          name={recipes.name}
          firstName={recipes.author.firstName}
          lastName={recipes.author.lastName}
          description={recipes.description}
          createdAt={recipes.createdAt}
          likes={recipes.likes}
          ingredients={recipes.ingredients}
          directions={recipes.directions}
          image={recipes.image}/>
        </li>
      ))}
    </ul>
    
    <h4 className="i-pd-1rem" >
      NEW
    </h4>
    <ul className="card-grid">
      {recipeList.map(recipes => (
        <li className="list-group-recipe" key={recipes._id}>
          {<Card 
          name={recipes.name}
          firstName={recipes.author.firstName}
          lastName={recipes.author.lastName}
          description={recipes.description}
          createdAt={recipes.createdAt}
          likes={recipes.likes}
          ingredients={recipes.ingredients}
          directions={recipes.directions}/>}
        </li>
      ))}
    </ul>
    </>
  )
  // <SlCard className="card-overview">
  //     <img
  //       slot="image"
  //       src="./images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
  //       alt="Salad."
  //     />
  //     <strong>Recipe name</strong>
  //     <br />
  //     User's name 
  //     <br />
  //     This is a description of the recipe.This is a description of the recipe. This is a description of the recipe.This is a description of the recipe!
  //     <br />
  //     <div slot="footer">
  //       <SlButton variant="default">
  //         SEE RECIPE
  //       </SlButton>
  //       <SlRating
  //         label="Rating"
  //         getSymbol={() => '<sl-icon name="hand-thumbs-up-fill"></sl-icon>'}
  //         max={1}></SlRating>
  //     </div>
  //   </SlCard>
    
    

};


export default Home;
