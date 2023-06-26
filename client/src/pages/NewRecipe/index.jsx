import {
  SlButton,
  SlIconButton,
  SlInput,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";
import React, { useEffect, useState } from "react";
import styles from "./NewRecipe.module.css";
import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";

const NewRecipe = (props) => {
  const [ingredientsFields, setIngredientsFields] = useState([]);
  const [directionsFields, setDirectionsFields] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    description: "",
    firstIngredient: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    servings: "",
    yield: "",
    firstDirection: "",
  });

  const [addRecipe] = useMutation(ADD_RECIPE);

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
      data[index] = event.target.value;

      setIngredientsFields(data);
    } else if (type === "directions") {
      let data = [...directionsFields];
      data[index] = event.target.value;

      setDirectionsFields(data);
    }
  };

  const handleCapture = async (e) => {
    e.preventDefault();
    let newData = {
      name: formState.name,
      image: formState.image,
      description: formState.description,
      prepTime: formState.prepTime,
      cookTime: formState.cookTime,
      totalTime: formState.totalTime,
      servings: formState.servings,
      yield: formState.yield,
      ingredients: [formState.firstIngredient, ...ingredientsFields],
      directions: [formState.firstDirection, ...directionsFields],
    };

    const mutationResponse = await addRecipe({
      variables: newData,
    });
    // const mutationResponse = await addRecipe({
    //   variables: {
    //     name: "This is a new recipe name",
    //     image: "this is an image!",
    //     description: "This is a description!",
    //     prepTime: "preptime yo",
    //     cookTime: "cook times",
    //     totalTime: "alll times",
    //     servings: "surfs up",
    //     yield: "YIUIIIEIIIELT",
    //     ingredients: ["this is the first one", "this is the second one"],
    //     directions: ["D this is the first one", "D this is the second one"],
    //   },
    // });

    console.log(mutationResponse.data.addRecipe._id);
  };

  const addElement = (type) => {
    if (type === "ingredients") {
      let newfield = [""];

      setIngredientsFields([...ingredientsFields, newfield]);
    } else if (type === "directions") {
      let newfield = [""];

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
    <div className="i-pd-1rem">
      <h1>New Recipe</h1>
      <form onSubmit={handleCapture} className={styles.form}>
        <div className={styles.firstGroup}>
          <SlInput
            label="Name"
            name="name"
            required
            value={formState.name}
            onSlInput={handleChange}
          />
          <br />
          <SlInput
            label="Image (url)"
            name="image"
            value={formState.image}
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
                  value={input}
                  onSlInput={(e) =>
                    handleDynamicChange(index, e, "ingredients")
                  }
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
        </div>
        <div className={styles.secondGroup}>
          <div className={styles.infoGroup}>
            <div>
              <SlInput
                label="Prep Time"
                name="prepTime"
                value={formState.prepTime}
                onSlInput={handleChange}
              />
              <br />
            </div>
            <div>
              <SlInput
                label="Cook Time"
                name="cookTime"
                value={formState.cookTime}
                onSlInput={handleChange}
              />
              <br />
            </div>
            <div>
              <SlInput
                label="Total Time"
                name="totalTime"
                value={formState.totalTime}
                onSlInput={handleChange}
              />
              <br />
            </div>
            <div>
              <SlInput
                label="Servings"
                name="servings"
                value={formState.servings}
                onSlInput={handleChange}
              />
              <br />
            </div>
            <div>
              <SlInput
                label="Yield"
                name="yield"
                value={formState.yield}
                onSlInput={handleChange}
              />
              <br />
            </div>
          </div>
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
                  value={input}
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
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;
