import React from "react";
import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            {`©️ Culinary Chronicles™️ ${year}`} <a target='_blank' href='https://github.com/Llourn/culinary_chronicles'><FaGithub /></a>
        </footer>
    )
};

export default Footer;

