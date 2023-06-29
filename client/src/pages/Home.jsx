import React, { useEffect } from "react";
import NewRecipe from "./NewRecipe";
import { __Directive } from "graphql";
import { useQuery } from "@apollo/client";
import {QUERY_ALL_RECIPES} from "../utils/queries";
import Card from "../components/Card";

const Home = (props) => {
  const {loading, data } = useQuery(QUERY_ALL_RECIPES);
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
    <ul className="list-group">
      {trendingRecipe.map(recipe => (
        <li className="list-group-recipe" key={recipe._id}>
          <Card 
          name={recipe.name}
          firstName={recipe.author.firstName}
          lastName={recipe.author.lastName}
          description={recipe.description}
          createdAt={recipe.createdAt}
          likes={recipe.likes}
          ingredients={recipe.ingredients}
          directions={recipe.directions}/>
        </li>
      ))}
    </ul>
    
    <h4 className="i-pd-1rem" >
      NEW
    </h4>
    <ul className="list-group">
      {recipeList.map(recipe => (
        <li className="list-group-recipe" key={recipe._id}>
          {<Card 
          name={recipe.name}
          firstName={recipe.author.firstName}
          lastName={recipe.author.lastName}
          description={recipe.description}
          createdAt={recipe.createdAt}
          likes={recipe.likes}
          ingredients={recipe.ingredients}
          directions={recipe.directions}/>}
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
