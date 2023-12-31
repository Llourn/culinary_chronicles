import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import styles from "./Login.module.css";

import { SlButton, SlInput } from "@shoelace-style/shoelace/dist/react";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN);
  const [error, setError] = useState(false);

  const errStyle = (error) => {
    if (error) {
      return { "--sl-input-border-color": "red" };
    }
  };

  const handleFocus = () => {
    if (error) {
      setError(false);
    }
  };

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
      if (e.message.includes("Incorrect credentials")) {
        setError(true);
        errStyle(true);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className={styles.formContainer}>
      <img
        className={styles.image}
        src="./images/welcome-back-login.jpg"
        alt="welcome sign"
      />
      <h2 className="i-pd-1rem">Login</h2>
      <form className="i-pd-1rem" onSubmit={handleFormSubmit}>
        <SlInput
          label="Email"
          placeholder="norm@oscorp.com"
          name="email"
          type="email"
          onSlInput={handleChange}
          clearable
          defaultValue=""
          style={errStyle(error)}
          onFocus={handleFocus}
          required
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
          style={errStyle(error)}
          onfocus={handleFocus}
          required
          defaultValue=""
          // pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          helpText="Min. 8 characters, at least 1 uppercase, lowercase, number and special character"
        />
        <br />
        <SlButton type="submit" variant="primary" outline>
          log in
        </SlButton>{" "}
        <SlButton
          type="reset"
          variant="warning"
          outline
          onClick={() => {
            setError("");
            errStyle("--sl-input-border-color: var(--sl-color-neutral-300);");
          }}
        >
          Reset
        </SlButton>
      </form>
      <p className={styles.signupCTA}>
        Don't have an account? <Link to="/signup">Sign up.</Link>
      </p>
    </div>
  );
}

export default Login;
