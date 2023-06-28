import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { SlButton, SlInput } from "@shoelace-style/shoelace/dist/react";
import validator from "validator";
import styles from "./Signup.module.css";

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const [blockSubmit, setBlockSubmit] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  useEffect(() => {
    const { firstName, lastName, email, password } = formState;
    const firstNameValid = validator.isLength(firstName, { min: 1 });
    const lastNameValid = validator.isLength(lastName, { min: 1 });
    const emailValid = validator.isEmail(email);
    const passwordValid = validator.isStrongPassword(password, {
      min: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });

    const result =
      firstNameValid && lastNameValid && emailValid && passwordValid;

    setBlockSubmit(!result);
  }, [formState]);

  const handleFormSubmit = async (event) => {
    try {
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
    } catch (error) {
      console.log(error);
      if (error.message.includes("duplicate key")) {
        console.log(error, "Email error");
        setError("Email already exists.");
      } else {
        console.log(error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    if (error) {
      setError("");
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
          required
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Last Name"
          name="lastName"
          type="lastName"
          required
          onSlInput={handleChange}
        />
        <br />
        <SlInput
          label="Email"
          placeholder="krillin@baldbychoice.dbz"
          name="email"
          type="email"
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
          helpText="Min. 8 characters with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol."
        />
        <br />
        {error ? <p>{error}</p> : null}
        <SlButton
          type="submit"
          variant="primary"
          outline
          disabled={blockSubmit}
        >
          Sign up
        </SlButton>{" "}
        <SlButton
          type="reset"
          variant="warning"
          outline
          onClick={() => setBlockSubmit(true)}
        >
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
