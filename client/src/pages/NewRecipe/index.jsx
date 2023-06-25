import {
  SlButton,
  SlIconButton,
  SlInput,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";
import React, { useEffect, useState } from "react";
import styles from "./NewRecipe.module.css";

const NewRecipe = (props) => {
  const [ingredientsFields, setIngredientsFields] = useState([
    { ingredient: "" },
  ]);
  const [directionsFields, setDirectionsFields] = useState([{ direction: "" }]);

  const [formState, setFormState] = useState({
    name: "",
    description: "",
    firstIngredient: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    servings: "",
    yield: "",
    firstDirection: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDynamicChange = (index, event) => {
    let data = [...ingredientsFields];
    data[index][event.target.name] = event.target.value;
    setIngredientsFields(data);
  };

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleCapture = (e) => {
    e.preventDefault();
    console.log(formState.name);
  };

  const addIngredient = () => {
    let newfield = { ingredient: "" };

    setIngredientsFields([...ingredientsFields, newfield]);
  };

  const removeIngredient = (index) => {
    let data = [...ingredientsFields];
    data.splice(index, 1);
    setIngredientsFields(data);
  };

  return (
    <>
      <h1>New Recipe</h1>
      <form onSubmit={handleCapture}>
        <SlInput
          label="Name"
          name="name"
          required
          value={formState.name}
          onSlInput={handleChange}
        />
        <br />
        <SlTextarea
          label="Description"
          name="description"
          value={formState.description}
          onSlInput={handleChange}
        />
        <br />
        <div className={styles.firstIngredient}>
          <SlInput
            label="Ingredients"
            name="firstIngredient"
            required
            value={formState.firstIngredient}
            onSlInput={handleChange}
          />
          <SlIconButton
            name="plus-square"
            label="ingredient"
            style={{ fontSize: "1rem" }}
            onClick={addIngredient}
          />
        </div>
        {ingredientsFields.map((input, index) => {
          return (
            <div className={styles.ingredientField} key={index}>
              <SlInput
                name="ingredient"
                required
                value={input.ingredient}
                onSlInput={(e) => handleDynamicChange(index, e)}
              />
              <SlIconButton
                name="x-square"
                label="ingredient"
                style={{ fontSize: "1.5rem" }}
                onClick={() => removeIngredient(index)}
              />
            </div>
          );
        })}
        <br />
        <SlInput
          label="Prep Time"
          name="prepTime"
          required
          value={formState.prepTime}
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Cook Time"
          name="cookTime"
          required
          value={formState.cookTime}
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Total Time"
          name="totalTime"
          required
          value={formState.totalTime}
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Servings"
          name="servings"
          required
          value={formState.servings}
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Yield"
          name="yield"
          required
          value={formState.yield}
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Directions"
          name="firstDirection"
          required
          value={formState.firstDirection}
          onSlInput={handleChange}
        />
        <br />
        <SlButton type="submit" variant="primary" outline>
          Create Recipe
        </SlButton>
      </form>
    </>
  );
};

export default NewRecipe;
