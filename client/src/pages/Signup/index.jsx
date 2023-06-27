import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { SlButton, SlInput } from "@shoelace-style/shoelace/dist/react";

import styles from "./Signup.module.css";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const regex = new RegExp(
      "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
    );
    const isValid = regex.test(value);
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleClear = (event) => {
    const newValueIsValid = !event.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        setError(false);
      }
    }
    setUserInput(event.target.value);
  };

  const handleFocus = () => {
    if (error) {
      setError(false);
    }
  };

  const style = (error) => {
    if (error) {
      return { "--sl-input-border-color": "red" };
    } else {
      return { "--sl-input-border-color": "green" };
    }
  };

  return (
    <div className={styles.formContainer}>
      <img
        className={styles.image}
        src="./images/welcome-signup.jpg"
        alt="welcome sign"
      />
      <h2 className="i-pd-1rem">Sign Up</h2>

      <form className="i-pd-1rem" onSubmit={handleFormSubmit}>
        <SlInput
          label="First Name"
          name="firstName"
          type="firstName"
          id="firstName"
          required
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Last Name"
          name="lastName"
          type="lastName"
          id="lastName"
          required
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Email"
          placeholder="krillin@baldbychoice.dbz"
          name="email"
          type="email"
          id="email"
          required
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          className="input"
          label="Password"
          name="password"
          type="password"
          passwordToggle
          clearable
          onSlInput={handleChange}
          required
          defaultValue=""
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleClear}
          style={style(error)}
          helpText="Min. 8 characters, at least 1 uppercase, lowercase, number and special character"
        />
        <br />
        <SlButton type="submit" variant="primary" outline>
          Sign up
        </SlButton>{" "}
        <SlButton type="reset" variant="warning" outline>
          Reset
        </SlButton>
      </form>
      <p className={styles.loginCTA}>
        Already have an account? <Link to="/login">Log in.</Link>
      </p>
    </div>
  );
}

export default Signup;
