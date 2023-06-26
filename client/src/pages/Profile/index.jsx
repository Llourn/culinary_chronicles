import React from "react";
import { SlAvatar } from "@shoelace-style/shoelace/dist/react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={styles.banner}></div>
      <SlAvatar label="User avatar" />
    </div>
  );
};

export default Profile;
