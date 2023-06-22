import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            {`©️ Culinary Chronicles™️ ${year}`} <a target='_blank' href='https://github.com/Llourn/culinary_chronicles'>Repo</a>
        </footer>
    )
};

export default Footer;