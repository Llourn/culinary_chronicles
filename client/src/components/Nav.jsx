import React from "react";
import {
  SlTab,
  SlTabGroup,
  SlInput,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <SlTabGroup className={styles.group}>
      <SlTab slot="nav" panel="culinary" white>
        Culinary Chronicles
      </SlTab>
      <SlTab slot="nav" panel="profile">
        🤦‍♀️
      </SlTab>
      <SlInput
        size="small"
        pill
        slot="nav"
        panel="search"
        placeholder="search"
        style={{ marginTop: "0.75rem" }}
      >
        <SlIcon name="search" slot="prefix"></SlIcon>
      </SlInput>
    </SlTabGroup>
  );
};

export default Nav;
