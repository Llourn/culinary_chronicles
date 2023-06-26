import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import styles from "./Nav.module.css";
import auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src="./images/logo-icon.svg" alt="logo" />
          <span>Culinary Chronicles</span>
        </div>
        <div className={styles.navigation}>
          {auth.loggedIn() ? (
            <SlIcon name="person-circle" onClick={() => navigate("/profile")} />
          ) : (
            <SlIcon
              name="box-arrow-in-right"
              onClick={() => navigate("/login")}
            />
          )}
          <SlIcon name="search" onClick={() => navigate("/search")} />
          {auth.loggedIn() && (
            <SlIcon name="box-arrow-right" onClick={() => logout()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
