import React, { useState } from "react";
import {
  SlTab,
  SlTabGroup,
  SlInput,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("search submitted: ", searchValue);
  };

  return (
    <SlTabGroup className={styles.group}>
      <SlTab slot="nav" panel="culinary">
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Culinary Chronicles
        </a>
      </SlTab>
      {/* Will Link to Profile/Login/Sign-up When completed */}
      <SlTab slot="nav" panel="profile">
        🤦‍♀️
      </SlTab>
      <SlInput
        type="search"
        size="small"
        pill
        slot="nav"
        panel="search"
        placeholder="Search"
        value={searchValue}
        onInput={handleSearchChange}
        onSubmit={handleSearchSubmit}
        style={{ marginTop: "0.75rem" }}
      >
        {/* Click the Icon to Search */}
        <SlIcon
          name="search"
          slot="suffix"
          onClick={handleSearchSubmit}
          style={{ cursor: "pointer" }}
        ></SlIcon>
      </SlInput>
    </SlTabGroup>
  );
};

export default Nav;
