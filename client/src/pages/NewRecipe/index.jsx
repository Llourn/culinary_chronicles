import {
  SlButton,
  SlIconButton,
  SlInput,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";
import React, { useEffect, useState } from "react";
import styles from "./NewRecipe.module.css";

const NewRecipe = (props) => {
  const [ingredientsFields, setIngredientsFields] = useState([]);
  const [directionsFields, setDirectionsFields] = useState([]);
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

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDynamicChange = (index, event, type) => {
    if (type === "ingredients") {
      let data = [...ingredientsFields];
      data[index][event.target.name] = event.target.value;

      setIngredientsFields(data);
      console.log("ing", ingredientsFields);
    } else if (type === "directions") {
      let data = [...directionsFields];
      data[index][event.target.name] = event.target.value;

      setDirectionsFields(data);
      console.log("dir", directionsFields);
    }
  };

  const handleCapture = (e) => {
    e.preventDefault();
    let data = {
      name: formState.name,
      description: formState.description,
      prepTime: formState.prepTime,
      cookTime: formState.cookTime,
      totalTime: formState.totalTime,
      servings: formState.servings,
      yield: formState.yield,
      ingredients: [formState.firstIngredient, ...ingredientsFields],
      directions: [formState.firstDirection, ...directionsFields],
    };

    console.log(data);
  };

  const addElement = (type) => {
    if (type === "ingredients") {
      let newfield = { ingredient: "" };

      setIngredientsFields([...ingredientsFields, newfield]);
    } else if (type === "directions") {
      let newfield = { direction: "" };

      setDirectionsFields([...directionsFields, newfield]);
    }
  };

  const removeIngredient = (index, type) => {
    if (type === "ingredients") {
      let data = [...ingredientsFields];
      data.splice(index, 1);

      setIngredientsFields(data);
    } else if (type === "directions") {
      let data = [...directionsFields];
      data.splice(index, 1);

      setDirectionsFields(data);
    }
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
        <div className={styles.leadingElement}>
          <SlIconButton
            name="plus-square"
            label="ingredient"
            style={{ fontSize: "1rem" }}
            onClick={() => addElement("ingredients")}
          />
          <SlInput
            label="Ingredients"
            name="firstIngredient"
            required
            value={formState.firstIngredient}
            onSlInput={handleChange}
          />
        </div>
        {ingredientsFields.map((input, index) => {
          return (
            <div className={styles.dynamicField} key={index}>
              <SlInput
                name="ingredient"
                required
                value={input.ingredient}
                onSlInput={(e) => handleDynamicChange(index, e, "ingredients")}
              />
              <SlIconButton
                name="x-square"
                label="ingredient"
                style={{ fontSize: "1.5rem" }}
                onClick={() => removeIngredient(index, "ingredients")}
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
        <div className={styles.leadingElement}>
          <SlIconButton
            name="plus-square"
            label="add element"
            style={{ fontSize: "1rem" }}
            onClick={() => addElement("directions")}
          />
          <SlTextarea
            label="Directions"
            name="firstDirection"
            required
            value={formState.firstDirection}
            onSlInput={handleChange}
          />
        </div>
        {directionsFields.map((input, index) => {
          return (
            <div className={styles.dynamicField} key={index}>
              <SlTextarea
                name="direction"
                required
                value={input.direction}
                onSlInput={(e) => handleDynamicChange(index, e, "directions")}
              />
              <SlIconButton
                name="x-square"
                label="ingredient"
                style={{ fontSize: "1.5rem" }}
                onClick={() => removeIngredient(index, "directions")}
              />
            </div>
          );
        })}
        <br />
        <SlButton type="submit" variant="primary" outline>
          Create Recipe
        </SlButton>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default NewRecipe;
